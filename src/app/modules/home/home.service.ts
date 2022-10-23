import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Producto } from 'src/app/core/producto.model';

interface Card {
  categoria: string;
  length: number;
}

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  cards:Card[] = [];
  productos: Producto[]=[];
  categorias:string[] = [];

  constructor(private store:Store<AppState>) {
    this.store.subscribe(state =>{
      this.productos=state.productos;
    })
  }

  disctinctCategorias() : void{
    for (let i = 0; i < this.productos.length; i ++ ){
      if(i==0) this.categorias.push(<string>this.productos[i].categoria);
      if(i!=0 && this.productos[i].categoria!=this.productos[i-1].categoria){this.categorias.push(<string>this.productos[i].categoria)};
    }
    
  }

  countCategorias() : void{
    for (let i = 0; i < this.categorias.length; i ++ ){ 
      this.cards.push({length:this.productos.filter(producto => producto.categoria==this.categorias[i] ).length,categoria:this.categorias[i]})
      }

  }

  getCards(){
    this.disctinctCategorias();
    console.log(this.categorias);
    this.countCategorias();
    let arr=this.cards;
    this.cards=[];
    this.categorias=[];
    return arr;
  }
}
