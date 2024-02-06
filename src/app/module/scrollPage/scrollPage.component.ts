import { Component, OnInit } from '@angular/core';
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-scrollPage',
  templateUrl: './scrollPage.component.html',
  styleUrls: ['./scrollPage.component.scss']
})

export class ScrollPageComponent implements OnInit {


  container: any;
  items: any;

  constructor() {
  }

  ngOnInit(): void {
    this.container.addEventListener('wheel', (event: any) => {
      event.preventDefault();
      const delta = event.deltaY;

      this.container.scrollBy({
        top: delta,
        behavior: 'smooth'
      });
    });
  }

}
