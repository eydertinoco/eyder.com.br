import {Component, Input, OnInit} from '@angular/core';
import { SkillLevel } from "../../enums/skill-level.enum";

@Component({
  selector: 'skill-exp-bar',
  templateUrl: './skill-exp-bar.component.html',
  styleUrls: ['./skill-exp-bar.component.scss']
})

export class SkillExpBarComponent implements OnInit {

  @Input() mySkillLevel: SkillLevel = SkillLevel.BEGINNER;
  widthSkill : number | undefined;

  constructor() { }
  ngOnInit(): void {
    this.mySkillWithThisTecnology();
  }

  mySkillWithThisTecnology() {
    switch (this.mySkillLevel.toUpperCase()) {
      case SkillLevel.INTERMEDIARY:
        this.widthSkill = 50;
        break;
      case SkillLevel.ADVANCED:
        this.widthSkill = 75;
        break;
      case SkillLevel.MASTER:
        this.widthSkill = 100;
        break;
      default:
        this.widthSkill = 25;
        break;
    }
  }
}
