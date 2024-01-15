import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./module/home/home.component";
import {NaoEncontradoComponent} from "./module/nao-encontrado/nao-encontrado.component";

const routes: Routes = [];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(
    [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: '**',
        component: NaoEncontradoComponent
      },
    ]
  )],
  exports: [RouterModule],
})
export class AppRoutingModule { }
