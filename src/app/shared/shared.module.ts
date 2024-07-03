import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RedeSocialComponent} from "./components/rede-social/rede-social.component";
import {ExperienciaComponent} from "./components/experiencia/experiencia.component";
import {IdiomaComponent} from "./components/idioma/idioma.component";
import {AcessibilidadeComponent} from "./components/acessibilidade/acessibilidade.component";
import {VlibrasComponent} from "./components/vlibras/vlibras.component";

@NgModule({
  declarations: [
    RedeSocialComponent,
    ExperienciaComponent,
    IdiomaComponent,
    AcessibilidadeComponent,
    VlibrasComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    RedeSocialComponent,
    ExperienciaComponent,
    IdiomaComponent,
    AcessibilidadeComponent,
    VlibrasComponent
  ],
})
export class SharedModule {}
