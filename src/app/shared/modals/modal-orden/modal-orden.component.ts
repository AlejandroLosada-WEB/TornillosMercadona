import { Component, Input, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { ProductosService } from 'src/app/modules/productos/productos.service';

@Component({
  selector: 'app-modal-orden',
  templateUrl: './modal-orden.component.html',
  styleUrls: ['./modal-orden.component.css']
})
export class ModalOrdenComponent implements OnInit {
  @Input() columnas:any[]=[];
  

  constructor(private serviceProductos:ProductosService) { }

  ngOnInit(): void {
  }

 
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.columnas, event.previousIndex, event.currentIndex);
  }

  guardar(){
    this.serviceProductos.setColumnas(this.columnas);
  }
}
