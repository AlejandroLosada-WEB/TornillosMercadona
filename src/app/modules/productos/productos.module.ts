import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosContainerComponent } from './productos-container/productos-container.component';
import { ProductosButtonEditComponent } from './productos-button-edit/productos-button-edit.component';
import { ProductosButtonDeleteComponent } from './productos-button-delete/productos-button-delete.component';
import { ProductoRoutingModule } from './productos-routing.module';
import { NavbarModule } from '../../shared/navbar/navbar.module';
import { FooterModule } from '../../shared/footer/footer.module';
import { ModalEliminarComponent } from '../../shared/modals/modal-eliminar/modal-eliminar.component';
import { ModalOrdenComponent } from '../../shared/modals/modal-orden/modal-orden.component';
import {RouterModule} from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { CommaDecimalPipe } from '../../pipes/comma-decimal.pipe';
import { ProductosTable2Component } from './productos-table2/productos-table2.component';
import { ProductosPaginacionComponent } from './productos-paginacion/productos-paginacion.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    ProductosContainerComponent,
    ProductosButtonEditComponent,
    ProductosButtonDeleteComponent,
    CommaDecimalPipe,
    ProductosTable2Component,
    ProductosPaginacionComponent,
    ModalEliminarComponent,
    ModalOrdenComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule,
    FooterModule,
    NavbarModule,
    RouterModule,
    MatTableModule,
    MatPaginatorModule,
    DragDropModule,
    NgxPaginationModule,
    
  ],
  exports: [
    ProductosContainerComponent
  ]
})
export class ProductosModule { }
