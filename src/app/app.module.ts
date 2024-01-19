import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {AppHeaderComponent} from "./layout/app-header/app-header.component";
import {AppFooterComponent} from "./layout/app-footer/app-footer.component";

import {HomeComponent} from "./module/home/home.component";
import {PortifolioComponent} from "./module/portifolio/portifolio.component";
import {YoutubeComponent} from "./module/youtube/youtube.component";
import {NgOptimizedImage} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    HomeComponent,
    PortifolioComponent,
    YoutubeComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgOptimizedImage
    ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
