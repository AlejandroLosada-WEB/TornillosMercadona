import { createReducer, on } from '@ngrx/store';
import { Producto } from '../../core/producto.model';
import productos from '../../data/productos.json';
import { crear,borrar } from './producto.actions';

export const initialState:Producto[] = productos['productos'];


export const productoReducer = createReducer(
  initialState,
  on(crear,(state, { name,price_prov,categoria,name_prov,format }) => [...state,new Producto(name,price_prov,categoria,name_prov,format)]),
  

  on(borrar,(state, { id }) => {
    return state.filter(producto => producto._id !== id);
  }),


);