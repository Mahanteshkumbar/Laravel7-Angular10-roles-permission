import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../auth/login/login.component';
import { RegisterComponent } from '../auth/register/register.component';

export const AuthRoutes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent}
];