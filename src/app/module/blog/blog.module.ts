import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import {ListaNoticiaComponent} from "./pages/lista-noticia/lista-noticia.component";
import {NoticiaComponent} from "./pages/noticia/noticia.component";


@NgModule({
  declarations: [
    ListaNoticiaComponent,
    NoticiaComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    ReactiveFormsModule,
  ]
})
export class BlogModule { }
