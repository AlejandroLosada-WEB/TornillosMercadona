import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeCardComponent } from './home-card/home-card.component';
import { HomeContainerComponent } from './home-container/home-container.component';
import { HomeRoutingModule } from './home-routing.module';
import {RouterModule} from '@angular/router';
import { NavbarModule } from '../../shared/navbar/navbar.module';
import { FooterModule } from '../../shared/footer/footer.module';

@NgModule({
  declarations: [
    HomeCardComponent,
    HomeContainerComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    RouterModule,
    NavbarModule,
    FooterModule
  ],
  exports: [
    HomeContainerComponent
  ],
})
export class HomeModule { }
