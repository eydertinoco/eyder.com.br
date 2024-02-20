import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RedeSocialComponent} from "./components/rede-social/rede-social.component";
import {ExperienciaComponent} from "./components/experiencia/experiencia.component";
import {IdiomaComponent} from "./components/idioma/idioma.component";

@NgModule({
  declarations: [
    RedeSocialComponent,
    ExperienciaComponent,
    IdiomaComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    RedeSocialComponent,
    ExperienciaComponent,
    IdiomaComponent,
  ],
})
export class SharedModule {}
