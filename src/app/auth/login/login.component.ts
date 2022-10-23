import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as ui from '../../shared/ui.actions';

import Swal from 'sweetalert2'
import { AuthService } from '../../services/auth.service';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [':host ::ng-deep .custom-spinner circle{ stroke: #3A7E45 !important;}']
})
export class LoginComponent implements OnInit, OnDestroy {
 
  
  
  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required ],
  });
  cargando: boolean = false;
  uiSubscription?: Subscription;


  constructor( private fb: FormBuilder,
               private authService: AuthService,
               private store: Store<AppState>,
               private router: Router ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required ],
    });

    this.uiSubscription = this.store.select('ui')
      .subscribe( ui => {
        this.cargando = ui.isLoading;
      });

  }

  ngOnDestroy() {
    this.uiSubscription?.unsubscribe();
  }

  login() {

    if ( this.loginForm?.invalid ) { return; }

    this.store.dispatch( ui.isLoading() );


    const { email, password } = this.loginForm?.value;

    this.authService.loginUsuario( email, password )
      .then( credenciales => {
        credenciales['user']?.multiFactor.getSession().then( auth =>{
          sessionStorage.setItem('credenciales',JSON.stringify(auth) );
        })
        
        this.store.dispatch( ui.stopLoading() );
        this.router.navigateByUrl("/");
      })
      .catch( err => {
        this.store.dispatch( ui.stopLoading() );
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Datos no válidos'
        })
      });

  }

}
