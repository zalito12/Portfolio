import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'showcase-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    document.title = 'GonGarce@Projects';
  }
}
