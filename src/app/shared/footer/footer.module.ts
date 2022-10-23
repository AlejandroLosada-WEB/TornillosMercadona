import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterContainerComponent } from './footer-container/footer-container.component';
import { FooterButtonComponent } from './footer-button/footer-button.component';
import { ModalInsertarComponent } from '../../shared/modals/modal-insertar/modal-insertar.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FooterContainerComponent,
    FooterButtonComponent,
    ModalInsertarComponent,
    
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    FormsModule, ReactiveFormsModule
  ],
  exports: [
    FooterContainerComponent, 
  ],
})
export class FooterModule { }
