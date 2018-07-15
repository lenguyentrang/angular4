import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppHomeComponent } from './app-home.component';
import { AppAboutComponent } from './app-about.component';
import { AppContactComponent } from './app-contact.component';
import { AppRouter } from './app.routing';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    AppAboutComponent,
    AppContactComponent,
    AppHomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRouter
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }