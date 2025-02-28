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
import {SharedModule} from "./shared/shared.module";
import {ContatoComponent} from "./module/contato/contato.component";
import {ScrollPageComponent} from "./module/scrollPage/scrollPage.component";
import {TecnologyService} from "./services/TecnologyService";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    HomeComponent,
    ContatoComponent,
    PortifolioComponent,
    YoutubeComponent,
    ScrollPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgOptimizedImage,
    SharedModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports: [
    TranslateModule
  ],
  providers: [
    TecnologyService,
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
