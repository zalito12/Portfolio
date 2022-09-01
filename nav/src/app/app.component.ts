import { Component, OnInit } from "@angular/core";

@Component({
  selector: "nav-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  public PAGES = {
    HOME: "HOME",
    SHOWCASE: "SHOWCASE",
    CONTACT: "CONTACT",
  };

  public page = this.PAGES.HOME;
  public showMenu = false;

  ngOnInit() {
    // Can't use router cause this app is in root url
    const path = window.location?.pathname?.toUpperCase();
    if (!path) {
      return;
    }

    for (const key in this.PAGES) {
      if (path.includes(this.PAGES[key])) {
        this.page = this.PAGES[key];
      }
    }
  }
}
