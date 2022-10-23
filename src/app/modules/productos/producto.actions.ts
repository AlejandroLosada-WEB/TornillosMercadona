import { createAction,props } from '@ngrx/store';


export const crear = createAction(
    '[PRODUCTO] Crear producto',
    props< { name:string,price_prov:number,categoria:string,name_prov:string,format:string } >()
);



export const borrar = createAction(
    '[PRODUCTO] Borrar',
    props< { id?:string } >()
);




