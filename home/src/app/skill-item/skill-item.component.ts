import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from "@angular/core";
import { assetUrl } from "src/single-spa/asset-url";

@Component({
  selector: "home-skill-item",
  templateUrl: "./skill-item.component.html",
  styleUrls: ["./skill-item.component.css"],
})
export class SkillItemComponent implements OnInit, AfterViewInit {
  @Input() public name: string;
  @Input() public url: string;
  @Input() public experience: number;
  @Input() public fun: number;
  @Input() public images: string[];
  @Input() public icons: { class: string; color: string }[];

  @ViewChild("bar1") experienceBar: ElementRef;
  @ViewChild("bar2") funBar: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.renderer.setStyle(
        this.experienceBar.nativeElement,
        "transform",
        "rotate(" + (45 + this.experience * 1.8) + "deg)"
      );
      this.renderer.setStyle(
        this.funBar.nativeElement,
        "transform",
        "rotate(" + (45 + this.fun * 1.8) + "deg)"
      );
    }, 0);
  }

  getImageUrl(image: string): string {
    return assetUrl(`/images/${image}`);
  }
}
