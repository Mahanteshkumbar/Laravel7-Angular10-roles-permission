import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { AuthRoutes } from './auth-routing.module';
import { InputUtilitiesModule, CheckboxModule, IconsModule, ButtonsModule, CardsModule, InputsModule } from 'angular-bootstrap-md';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
//import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../admin/auth.interceptor';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(AuthRoutes),    
    InputUtilitiesModule,
    CheckboxModule,
    IconsModule,
    ButtonsModule,
    CardsModule,
    InputsModule,   
    //StoreModule.forRoot(reducers) 
  ],
  providers:[
    AuthService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ]
})

export class AuthModule {

}
