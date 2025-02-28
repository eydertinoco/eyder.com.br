import { Component, OnInit } from '@angular/core';
import { SkillLevel } from "../../shared/enums/skill-level.enum";
import { Timeline } from "../../shared/enums/timeline.enum";
import { TecnologyService } from "../../services/TecnologyService";
import {TranslateService} from "@ngx-translate/core";

interface Tecnology {
  tecnologyName: string;
  mySkillLevel: SkillLevel;
  tecnologyImg: string;
}

interface Experience {
  nome: string;
  dataEntrada: string;
  dataSaida: string;
  status: string;
  descricao: string;
  theme: string;
}

@Component({
  selector: 'app-portifolio',
  templateUrl: './portifolio.component.html',
  styleUrls: ['./portifolio.component.scss']
})
export class PortifolioComponent implements OnInit {
  choseTheme: Timeline | null = null;

  listTecnologys: Tecnology[] = [];
  backgroundImageUrl = '../../assets/img/ifal.jpg';

  myExperience: Experience[] = [];

  constructor(
    private tecnologyService: TecnologyService,
    private translate: TranslateService
  ) {
  }

  ngOnInit(): void {
    this.tecnologyService.getTecnologies().subscribe(data => {
      this.listTecnologys = data.map(tecnology => ({
        tecnologyName: tecnology.tecnologyName,
        mySkillLevel: this.mapSkillLevel(tecnology.mySkillLevel),
        tecnologyImg: tecnology.tecnologyImg
      }));
    });

    this.translate.get('PORTIFOLIO.WORK_TIMELINE.EXPERIENCE').subscribe((experiences: Experience[]) => {
      this.myExperience = experiences.map(exp => ({
        ...exp,
      }));
    });
  }

  private mapSkillLevel(level: string): SkillLevel {
    const skillLevel = level.replace('SkillLevel.', ''); // Remover o prefixo
    switch (skillLevel) {
      case 'BEGINNER':
        return SkillLevel.BEGINNER;
      case 'INTERMEDIARY':
        return SkillLevel.INTERMEDIARY;
      case 'ADVANCED':
        return SkillLevel.ADVANCED;
      case 'MASTER':
        return SkillLevel.MASTER;
      default:
        throw new Error(`Unknown skill level: ${skillLevel}`);
    }
  }

  getExperienceForTheme(theme: Timeline): any[] {
    return this.myExperience.filter(experience => experience.theme === theme);
  }

  protected readonly SkillLevel = SkillLevel;
}
