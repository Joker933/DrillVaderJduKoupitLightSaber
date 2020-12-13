import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RoccoComponent } from './rocco/rocco.component';
import {FormsModule} from '@angular/forms';
import { UsercreateComponent } from './usercreate/usercreate.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { UserssComponent } from './userss/userss.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    RoccoComponent,
    UsercreateComponent,
    UserdetailComponent,
    UserssComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
