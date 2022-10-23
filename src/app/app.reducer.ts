import { ActionReducerMap } from "@ngrx/store";
import { Producto } from "./core/producto.model";
import { productoReducer } from "./modules/productos/producto.reducer";
import * as ui from './shared/ui.reducer';
import * as auth from './auth/auth.reducer';


export interface AppState {
  productos: Producto[],
  ui: ui.State,
  user: auth.State
  
}


export const appReducers:ActionReducerMap<AppState> ={
  productos:productoReducer,
  ui: ui.uiReducer,
  user: auth.authReducer,
  
}

