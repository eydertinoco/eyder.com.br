import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./module/home/home.component";
import {PageNotFoundComponent} from "./module/404/404.component";
import {PortifolioComponent} from "./module/portifolio/portifolio.component";
import {YoutubeComponent} from "./module/youtube/youtube.component";
import {ContatoComponent} from "./module/contato/contato.component";
import {ScrollPageComponent} from "./module/scrollPage/scrollPage.component";

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
        path: 'contato',
        component: ContatoComponent
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
        path: 'scroll',
        component: ScrollPageComponent
      },
      {
        path: 'blog',
        loadChildren: () =>
          import(
            './module/blog/blog.module'
            ).then((m) => m.BlogModule),
      },
      {
        path: '',
        redirectTo: '/portifolio',
        pathMatch: 'full'
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
