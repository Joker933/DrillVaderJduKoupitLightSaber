import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {prihlaseniComponent} from './prihlaseni/prihlaseni.component';
import {zaregistrujseComponent} from './zaregistruj-se/zaregistruj-se.component';



const routes: Routes = [
  {path: 'prihlaseni', component: prihlaseniComponent},
  {path: 'Zaregistruj-se', component: zaregistrujseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
