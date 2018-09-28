import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import {RouterModule, Routes}from '@angular/router';
import { LoginComponent } from './login/login.component';

const appRoutes : Routes = [
   {path:'login', component:LoginComponent},
  // {path:'', component:},
  {path:'', redirectTo: '/login', pathMatch : 'full'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
    //CommonModule
  ],
  //declarations: []
  exports:[RouterModule]
})
export class AppRoutingModule { }
