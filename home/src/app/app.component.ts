import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from "@angular/core";
import Parallax from "parallax-js";

@Component({
  selector: "home-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild("header") public parallaxHeader: ElementRef;

  ngOnInit() {
    document.title = "GonGarce@Home";
  }

  ngAfterViewInit() {
    new Parallax(this.parallaxHeader.nativeElement);
  }

  @HostListener("window:scroll", ["$event"])
  onScroll(_event) {
    const top = window.pageYOffset;

    const layers: any = document.getElementsByClassName("parallax-layer");
    for (let i = 0; i < layers.length; i++) {
      const layer = layers[i];
      const speed = layer.getAttribute("data-speed");
      const yPos = -((top * speed) / 100);
      layer.style.top = yPos + "px";
    }
  }
}
