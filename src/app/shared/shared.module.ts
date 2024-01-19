import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RedeSocialComponent} from "./components/rede-social/rede-social.component";

@NgModule({
  declarations: [
    RedeSocialComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    RedeSocialComponent
  ],
})
export class SharedModule {}
