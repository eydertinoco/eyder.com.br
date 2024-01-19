import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./module/home/home.component";
import {PageNotFoundComponent} from "./module/404/404.component";
import {PortifolioComponent} from "./module/portifolio/portifolio.component";
import {YoutubeComponent} from "./module/youtube/youtube.component";

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
        path: 'portifolio',
        component: PortifolioComponent
      },
      {
        path: 'youtube',
        component: YoutubeComponent
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
