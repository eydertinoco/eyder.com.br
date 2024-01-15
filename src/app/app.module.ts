import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterOutlet } from "@angular/router";
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {HomeComponent} from "./module/home/home.component";

import {AppHeaderComponent} from "./layout/app-header/app-header.component";
import {AppFooterComponent} from "./layout/app-footer/app-footer.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppHeaderComponent,
    AppFooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterOutlet
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
