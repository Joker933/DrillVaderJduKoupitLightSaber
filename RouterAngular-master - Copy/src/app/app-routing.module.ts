import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RoccoComponent } from './rocco/rocco.component';
import { UsercreateComponent } from './usercreate/usercreate.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import {UserssComponent} from './userss/userss.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'rocco', component: RoccoComponent},
  {path: 'user.create', component: UsercreateComponent},
  {path: 'user/:id', component: UserdetailComponent},
  {path: 'userss', component: UserssComponent},
  {path: '', redirectTo: '/rocco', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
