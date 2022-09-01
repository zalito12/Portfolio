import { Component, OnInit } from "@angular/core";

@Component({
  selector: "nav-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  public PAGES = {
    HOME: {
      path: "/home",
      title: "home",
    },
    SHOWCASE: {
      path: "/showcase",
      title: "projects",
    },
    CONTACT: {
      path: "/contact",
      title: "contact",
    },
  };

  public page: { path: string; title: string } = this.PAGES.HOME;
  public showMenu = false;

  ngOnInit() {
    // Can't use router cause this app is in root url
    const path = window.location?.pathname?.toLowerCase();
    if (!path) {
      return;
    }

    for (const key in this.PAGES) {
      if (path == this.PAGES[key].path) {
        this.page = this.PAGES[key];
      }
    }
  }
}
