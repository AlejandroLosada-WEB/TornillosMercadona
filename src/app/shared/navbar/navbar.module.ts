import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarContainerComponent } from './navbar-container/navbar-container.component';
import { NavbarButtonLoginComponent } from './navbar-button-login/navbar-button-login.component';
import { NabvarButtonLogoutComponent } from './nabvar-button-logout/nabvar-button-logout.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavbarContainerComponent,
    NavbarButtonLoginComponent,
    NabvarButtonLogoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarContainerComponent, 
  ],
})
export class NavbarModule { }
