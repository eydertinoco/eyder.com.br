import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RedeSocialComponent} from "./components/rede-social/rede-social.component";
import {ExperienciaComponent} from "./components/experiencia/experiencia.component";
import {AcessibilidadeComponent} from "./components/acessibilidade/acessibilidade.component";
import {VlibrasComponent} from "./components/vlibras/vlibras.component";
import {SkillExpBarComponent} from "./components/skill-exp-bar/skill-exp-bar.component";
import {SkillTecnologyComponent} from "./components/skill-tecnology/skill-tecnology.component";
import {TimelineComponent} from "./components/timeline/timeline.component";
import {ListCertifyComponent} from "./components/list-certify/list-certify.component";
import {DialogModule} from "primeng/dialog";
import {DropdownModule} from "primeng/dropdown";
import {FormsModule} from "@angular/forms";
import {LanguageComponent} from "./components/language/language.component";
import {DarkthemeComponent} from "./components/darktheme/darktheme.component";

@NgModule({
  declarations: [
    RedeSocialComponent,
    ExperienciaComponent,
    AcessibilidadeComponent,
    LanguageComponent,
    DarkthemeComponent,
    VlibrasComponent,
    SkillExpBarComponent,
    SkillTecnologyComponent,
    TimelineComponent,
    ListCertifyComponent
  ],
  imports: [
    CommonModule,
    DialogModule,
    DropdownModule,
    FormsModule,
  ],
  exports: [
    RedeSocialComponent,
    ExperienciaComponent,
    AcessibilidadeComponent,
    LanguageComponent,
    DarkthemeComponent,
    VlibrasComponent,
    SkillExpBarComponent,
    SkillTecnologyComponent,
    TimelineComponent
  ],
})
export class SharedModule {}
