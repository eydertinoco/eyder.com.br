import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RedeSocialComponent} from "./components/rede-social/rede-social.component";
import {ExperienciaComponent} from "./components/experiencia/experiencia.component";
import {IdiomaComponent} from "./components/idioma/idioma.component";
import {AcessibilidadeComponent} from "./components/acessibilidade/acessibilidade.component";
import {VlibrasComponent} from "./components/vlibras/vlibras.component";
import {SkillExpBarComponent} from "./components/skill-exp-bar/skill-exp-bar";
import {SkillTecnologyComponent} from "./components/skill-tecnology/skill-tecnology";

@NgModule({
  declarations: [
    RedeSocialComponent,
    ExperienciaComponent,
    IdiomaComponent,
    AcessibilidadeComponent,
    VlibrasComponent,
    SkillExpBarComponent,
    SkillTecnologyComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    RedeSocialComponent,
    ExperienciaComponent,
    IdiomaComponent,
    AcessibilidadeComponent,
    VlibrasComponent,
    SkillExpBarComponent,
    SkillTecnologyComponent
  ],
})
export class SharedModule {}
