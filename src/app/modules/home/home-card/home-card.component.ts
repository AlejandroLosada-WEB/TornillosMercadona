import { state } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../home.service';




interface Card {
  categoria: string;
  length: number;
}

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: []
})



export class HomeCardComponent implements OnInit {
  
  cards:Card[]=[];  

  constructor(private router: Router,private servicioHome:HomeService) { 
    
  }

  ngOnInit(): void {
    this.cards=this.servicioHome.getCards()
  }

 

  goToTable(table:string) : void{
    this.router.navigateByUrl("/productos/"+table);

  }
}
