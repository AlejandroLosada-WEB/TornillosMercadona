import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-button',
  template: "<button class='boton_primario' id='insertarButton' type='button' data-bs-toggle='modal' data-bs-target='#insertar'>Añadir {{ nombre }}</button><app-modal-insertar></app-modal-insertar>",
  styleUrls: []
})
export class FooterButtonComponent implements OnInit {
  public nombre:string = "";
  
  constructor() { }

  ngOnInit(): void {

  }

}
