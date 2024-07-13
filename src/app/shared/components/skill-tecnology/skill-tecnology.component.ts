import {Component, Input, OnInit} from '@angular/core';
import { SkillLevel } from "../../enums/skill-level.enum";

@Component({
  selector: 'skill-tecnology',
  templateUrl: './skill-tecnology.component.html',
  styleUrls: ['./skill-tecnology.component.scss']
})

export class SkillTecnologyComponent implements OnInit {

  @Input() tecnologyName: String | undefined;
  @Input() tecnologyImg: String | undefined;
  @Input() mySkillLevel: SkillLevel = SkillLevel.BEGINNER;


  constructor() { }
  ngOnInit(): void {

  }

  protected readonly SkillLevel = SkillLevel;
}
