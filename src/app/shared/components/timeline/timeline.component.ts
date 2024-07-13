import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Timeline} from "../../enums/timeline.enum";

@Component({
  selector: 'timeline-component',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})

export class TimelineComponent implements OnInit {

  @Output() choseTheme = new EventEmitter<Timeline>();

  constructor() { }
  ngOnInit(): void {

  }

  escolherTema(theme: Timeline) {
    this.choseTheme.emit(theme);
  }

  protected readonly Timeline = Timeline;
}
