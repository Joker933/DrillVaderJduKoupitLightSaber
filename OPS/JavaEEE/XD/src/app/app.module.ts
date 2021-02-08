import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrihlaseniComponent } from './prihlaseni/prihlaseni.component';
import { ZaregistrujSeComponent } from './zaregistruj-se/zaregistruj-se.component';
import {HttpClient} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PrihlaseniComponent,
    ZaregistrujSeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClient,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
