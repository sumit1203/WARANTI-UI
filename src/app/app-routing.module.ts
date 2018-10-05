import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import {RouterModule, Routes}from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ConsumerComponent } from './consumer/consumer.component';
import { MerchantComponent } from './merchant/merchant.component';

const appRoutes : Routes = [
  {path:'login', component:LoginComponent},
  {path:'consumer', component:ConsumerComponent},
  {path:'merchant', component:MerchantComponent},
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
