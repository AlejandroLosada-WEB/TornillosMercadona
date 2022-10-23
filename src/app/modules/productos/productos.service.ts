import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  columnas=['ID','Nombre','Categoria','Nombre Proovedor','Precio Proovedor','Formato','Revisado','Acciones'];

  constructor() { }

  getcolumnas(){
    return this.columnas;
  }

  setColumnas(columnas:any){
    this.columnas=columnas;
  }

}
