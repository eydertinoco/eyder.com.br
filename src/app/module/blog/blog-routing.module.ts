import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListaNoticiaComponent} from "./pages/lista-noticia/lista-noticia.component";
import {NoticiaComponent} from "./pages/noticia/noticia.component";

const routes: Routes = [
  {
      path: '',
      component: ListaNoticiaComponent,
  },
  {
    path: 'noticia/:id',
    component: NoticiaComponent
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class BlogRoutingModule {}
