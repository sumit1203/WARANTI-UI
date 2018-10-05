import { Component, OnInit } from '@angular/core';
import {LoginModel}from '../core/models/login-model';
import {LoginService}from '../core/services/account/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginModel: any = {};
  isPopup = false;
  constructor(private loginService: LoginService) { 
    this.isPopup = false;
  }

  ngOnInit() {

  }

  onSubmit(){
    this.loginModel.username = '9999999999';
    this.loginModel.password = 'Dahlia@123'
    }
}
