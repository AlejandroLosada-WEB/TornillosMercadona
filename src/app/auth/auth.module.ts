import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../auth/login/login.component';
import { RegisterComponent } from '../auth/register/register.component';
import { AuthContainerComponent } from '../auth/auth-container/auth-container.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarModule } from '../shared/navbar/navbar.module';
import {RouterModule} from '@angular/router';
import { AuthRoutingModule } from './auth-routing.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthContainerComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NavbarModule,
    RouterModule,
    AuthRoutingModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    AuthContainerComponent
  ],
})
export class AuthModule { }
