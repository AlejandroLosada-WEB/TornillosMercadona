import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actionsProductos from '../../../modules/productos/producto.actions';

@Component({
  selector: 'app-modal-eliminar',
  templateUrl: './modal-eliminar.component.html',
  styles: ['.modal_eliminar{border-top:4px solid #AA2223;}']
})



export class ModalEliminarComponent implements OnInit {
  @ViewChild('botonCerrarModal') botonCerrar?:ElementRef;
  @Input() id_asignacion:string | undefined;
  @Input() tipo:string | undefined;

  texto='¿Desea eliminar el elemento seleccionado?';
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  eliminar(): void{
    this.store.dispatch( actionsProductos.borrar({id:this.id_asignacion}));
    this.texto="Elemento borrado";
    this.botonCerrar?.nativeElement.click();
  }

}
