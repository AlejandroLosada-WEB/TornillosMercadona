import { createReducer, on } from '@ngrx/store';
import { setUser, unSetUser } from './auth.actions';
import { Usuario } from '../core/usuario.model';

export interface State {
    user: any; 
}

export const initialState: State = {
   user: null,
}

export const authReducer = createReducer(initialState,

    on( setUser, (state, { user }) => ({ ...state, user: { ...user }  })),
    on( unSetUser, state => ({ ...state, user: null  })),

);

