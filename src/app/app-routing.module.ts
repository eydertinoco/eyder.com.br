import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./module/home/home.component";
import {PageNotFoundComponent} from "./module/404/404.component";

const routes: Routes = [];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(
    [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: '**',
        component: PageNotFoundComponent
      }
    ]
  )],
  exports: [RouterModule],
})
export class AppRoutingModule { }
