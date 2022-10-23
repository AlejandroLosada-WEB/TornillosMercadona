import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Producto } from 'src/app/core/producto.model';


interface Card {
  categoria: string;
  length: number;
}

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})

export class HomeContainerComponent implements OnInit {
  
  
  
  
  constructor() { 
    
  }

  ngOnInit(): void {
    
  }

  
  

}
