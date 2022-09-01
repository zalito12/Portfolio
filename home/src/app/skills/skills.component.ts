import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChildren,
} from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { debounceTime, distinctUntilChanged, takeUntil } from "rxjs/operators";
import { Skill } from "../common/skill";
import { TransitionGroupItemDirective } from "../directives/transition-group-item.directive";
import { RestClientService } from "../services/rest-client.service";

interface Filter {
  key: string;
  value: string;
}

@Component({
  selector: "home-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent implements OnInit, OnDestroy {
  public SORT = {
    EXPERIENCE: "EXPERIENCE",
    FUN: "FUN",
  };
  public FILTER = {
    ALL: { key: "ALL", value: "All" },
    LANGUAGES: { key: "LANGUAGES", value: "Languages" },
    FRAMEWORKS: { key: "FRAMEWORKS", value: "Frameworks" },
    TOOLS: { key: "TOOLS", value: "Tools" },
    METHOD: { key: "METHOD", value: "Methodologies" },
    SEARCH: { key: "SEARCH", value: "SEARCH" },
  };
  public filters = [
    this.FILTER.ALL,
    this.FILTER.LANGUAGES,
    this.FILTER.FRAMEWORKS,
    this.FILTER.TOOLS,
    // this.FILTER.METHOD,
  ];

  public showTooltip = false;
  public currentOrder = this.SORT.EXPERIENCE;
  public currentFilter = this.FILTER.ALL;
  public search: string = null;

  public skills: Skill[];
  public filtedSkills$ = new BehaviorSubject<Skill[]>(null);
  private searchChanged$ = new Subject<string>();
  private destroy$ = new Subject<boolean>();

  @ViewChildren(TransitionGroupItemDirective)
  transItems: QueryList<TransitionGroupItemDirective>;

  constructor(private skillService: RestClientService) {}

  ngOnInit(): void {
    this.skillService.getSkills$().subscribe((skills) => {
      if (!skills) {
        skills = [];
      }

      this.skills = skills;
      this.filtedSkills$.next(skills.sort(this.sortBy(this.currentOrder)));
    });
    this.searchChanged$
      .pipe(takeUntil(this.destroy$), debounceTime(300), distinctUntilChanged())
      .subscribe((searchFilter) => this.onSearchFilter(searchFilter));
  }

  ngOnDestroy() {
    this.destroy$.next(true);
  }

  onSort(sortBy: string) {
    this.currentOrder = sortBy;
    this.filtedSkills$.next(
      this.filtedSkills$.getValue().sort(this.sortBy(sortBy))
    );
  }

  onFilter(filter: Filter) {
    this.currentFilter = filter;
    this.search = null;
    this.filtedSkills$.next(
      this.skills
        .filter(
          (skill) =>
            filter.key === this.FILTER.ALL.key || skill.type === filter.key
        )
        .sort(this.sortBy(this.currentOrder))
    );
  }

  onChangeSarch(textFilter: string) {
    this.searchChanged$.next(textFilter);
  }

  onSearchFilter(textFilter: string) {
    this.currentFilter = this.FILTER.SEARCH;
    this.search = textFilter;
    if (!textFilter) {
      this.onFilter(this.FILTER.ALL);
      return;
    }

    this.filtedSkills$.next(
      this.skills
        .filter((skill) =>
          skill.name
            .toLocaleUpperCase()
            .includes(textFilter.toLocaleUpperCase())
        )
        .sort(this.sortBy(this.currentOrder))
    );
  }

  private sortBy(sortBy: string): (a: Skill, b: Skill) => number {
    if (sortBy === this.SORT.EXPERIENCE) {
      return this.sortByExperience;
    }
    return this.sortByFun;
  }

  private sortByExperience(a: Skill, b: Skill) {
    return b.experience - a.experience;
  }
  private sortByFun(a: Skill, b: Skill) {
    return b.fun - a.fun;
  }

  ngAfterViewInit() {
    setTimeout(() => this.refreshPosition("prevPos"), 0); // save init positions on next 'tick'

    this.transItems.changes.subscribe((items) => {
      items.forEach((item) => (item.prevPos = item.newPos || item.prevPos));
      items.forEach(this.runCallback);
      this.refreshPosition("newPos");
      items.forEach((item) => (item.prevPos = item.prevPos || item.newPos)); // for new items

      const animate = () => {
        items.forEach(this.applyTranslation);
        this["_forceReflow"] = document.body.offsetHeight; // force reflow to put everything in position
        this.transItems.forEach(this.runTransition.bind(this));
      };

      const willMoveSome = items.some((item) => {
        const dx = item.prevPos.left - item.newPos.left;
        const dy = item.prevPos.top - item.newPos.top;
        return dx || dy;
      });

      if (willMoveSome) {
        animate();
      } else {
        setTimeout(() => {
          // for removed items
          this.refreshPosition("newPos");
          animate();
        }, 0);
      }
    });
  }

  runCallback(item: TransitionGroupItemDirective) {
    if (item.moveCallback) {
      item.moveCallback();
    }
  }

  runTransition(item: TransitionGroupItemDirective) {
    if (!item.moved) {
      return;
    }
    const cssClass = "flip-list-move";
    let el = item.el;
    let style: any = el.style;
    el.classList.add(cssClass);
    style.transform = style.WebkitTransform = style.transitionDuration = "";
    /* el.addEventListener(
      "transitionend",
      (item.moveCallback = (e: any) => {
        if (!e || /transform$/.test(e.propertyName)) {
          el.removeEventListener("transitionend", item.moveCallback);
          item.moveCallback = null;
          //el.classList.remove(cssClass);
        }
      })
    ); */
  }

  /* refreshPosition(prop: string) {
    this.transItems.forEach((item) => {
      item[prop] = item.el.getBoundingClientRect();
    });
  } */
  refreshPosition(prop: string) {
    this.transItems.forEach((item) => {
      item[prop] = {
        top: item.el.offsetTop,
        left: item.el.offsetLeft,
      };
    });
  }

  applyTranslation(item: TransitionGroupItemDirective) {
    item.moved = false;
    const dx = item.prevPos.left - item.newPos.left;
    const dy = item.prevPos.top - item.newPos.top;
    if (dx || dy) {
      item.moved = true;
      let style: any = item.el.style;
      style.transform = style.WebkitTransform =
        "translate(" + dx + "px," + dy + "px)";
      style.transitionDuration = "0s";
    }
  }
}
