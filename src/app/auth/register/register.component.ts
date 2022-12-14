import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as ui from '../../shared/ui.actions';


import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [':host ::ng-deep .custom-spinner circle{ stroke: #3A7E45 !important;}']
})
export class RegisterComponent implements OnInit, OnDestroy {

  registroForm: FormGroup = this.fb.group({
    nombre:   ['', Validators.required ],
    correo:   ['', [Validators.required, Validators.email ] ],
    password: ['', Validators.required ],
  });
  cargando: boolean = false;
  uiSubscription?: Subscription;

  constructor( private fb: FormBuilder,
               private authService: AuthService,
               private store: Store<AppState>,
               private router: Router) { }

  ngOnInit() {

    this.registroForm = this.fb.group({
      nombre:   ['', Validators.required ],
      correo:   ['', [Validators.required, Validators.email ] ],
      password: ['', Validators.required ],
    });

    this.uiSubscription = this.store.select('ui')
      .subscribe( ui => this.cargando = ui.isLoading );
  }

  ngOnDestroy() {
    this.uiSubscription?.unsubscribe();
  }

  crearUsuario() {

    if ( this.registroForm?.invalid ) { return; }
   

    this.store.dispatch( ui.isLoading() );


    const { nombre, correo, password } = this.registroForm?.value;

    this.authService.crearUsuario( nombre, correo, password )
      .then( credenciales => {
        console.log(credenciales);

        // Swal.close();
        this.store.dispatch( ui.stopLoading() );
        Swal.fire({
          icon: 'success',
          text: 'User registrado'
        })
        this.router.navigateByUrl("auth/login")
      })
      .catch( err => {
        this.store.dispatch( ui.stopLoading() );
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Datos incorrectos'
        })
      });
  }

}
