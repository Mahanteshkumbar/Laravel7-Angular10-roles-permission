import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';
import { RouterModule } from '@angular/router';
import { dashBoardRoutes } from './dashboard-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ButtonsModule, InputUtilitiesModule, InputsModule, MDBBootstrapModule } from 'angular-bootstrap-md';
import { FooterComponent } from './layouts/common/footer/footer.component';
import { SidebarComponent } from './layouts/common/sidebar/sidebar.component';
import { NavbarComponent } from './layouts/common/navbar/navbar.component';

@NgModule({
  declarations: [DashboardComponent, NavbarComponent, SidebarComponent, FooterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(dashBoardRoutes),
    ButtonsModule,
    InputUtilitiesModule,
    InputsModule,    
    FormsModule,
    MDBBootstrapModule.forRoot()

  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardModule { }
