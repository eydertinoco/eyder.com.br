import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RedeSocialComponent} from "./components/rede-social/rede-social.component";
import {ExperienciaComponent} from "./components/experiencia/experiencia.component";

@NgModule({
  declarations: [
    RedeSocialComponent,
    ExperienciaComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    RedeSocialComponent,
    ExperienciaComponent,
  ],
})
export class SharedModule {}
