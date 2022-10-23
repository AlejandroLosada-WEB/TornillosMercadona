import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-container',
  templateUrl: './footer-container.component.html',
  styleUrls: []
})
export class FooterContainerComponent implements OnInit {
  nombreBoton: string | undefined;
  
  constructor() { }

  ngOnInit(): void {
  }

}
