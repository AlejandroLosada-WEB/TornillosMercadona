import { Component, OnInit } from '@angular/core';
import { PaginacionService } from 'src/app/services/paginacion.service';

@Component({
  selector: 'app-productos-paginacion',
  templateUrl: './productos-paginacion.component.html',
  styleUrls: ['./productos-paginacion.component.css']
})
export class ProductosPaginacionComponent implements OnInit {

  constructor(private pagination:PaginacionService) { }

  ngOnInit(){

  }
  
}
