import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-button-login',
  template: "<button class='boton_secundario' routerLink='/auth/login'  type='submit'>Iniciar session</button>",
  styleUrls: []
})
export class NavbarButtonLoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
