import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as ui from '../../../shared/ui.actions';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/app.reducer';
import * as actionsProductos from '../../../modules/productos/producto.actions';

@Component({
  selector: 'app-modal-insertar',
  templateUrl: './modal-insertar.component.html',
  styles: ['.modal_eliminar{border-top:4px solid #AA2223;}:host ::ng-deep .custom-spinner circle{ stroke: #3A7E45 !important;}']
})
export class ModalInsertarComponent implements OnInit {
  tipo:string="Producto";
  

  insertarForm: FormGroup = this.fb.group({
      name: ['', Validators.required],
      price_prov: ['', Validators.required ],
      categoria: ['', Validators.required ],
      name_prov: ['', Validators.required ],
      format: ['', Validators.required ],
  });
  cargando: boolean = false;
  uiSubscription?: Subscription
  
  ;
  constructor(private fb: FormBuilder,private store:Store<AppState>) { }

  ngOnInit(): void {
    this.insertarForm = this.fb.group({
      name: ['', Validators.required],
      price_prov: ['', [Validators.required,Validators.pattern('[0-9]*[,]?[0-9]{2}?')] ],
      categoria: ['', Validators.required ],
      name_prov: ['', Validators.required ],
      format: ['', Validators.required ],
    });

    this.uiSubscription = this.store.select('ui')
      .subscribe( ui => {
        this.cargando = ui.isLoading;
      });
  }

  insertar() {

    if ( this.insertarForm?.invalid ) {  return; }
    this.store.dispatch( ui.isLoading() );
    var { name, price_prov, categoria , name_prov , format } = this.insertarForm?.value;
    price_prov=Number(price_prov.replace(",","."));
    this.store.dispatch( actionsProductos.crear({name:name,price_prov:price_prov,categoria:categoria,name_prov:name_prov,format:format}) )
    this.insertarForm.reset();
    this.store.dispatch( ui.stopLoading() );

  }

}
