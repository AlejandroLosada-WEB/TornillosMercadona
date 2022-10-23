import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar-container',
  templateUrl: './navbar-container.component.html',
  styleUrls: ['./navbar-container.component.css']
})
export class NavbarContainerComponent implements OnInit {
  botonVisible: boolean = false;

  constructor(private auth:AuthService) { 
    
  }

  ngOnInit(): void {
    let token=sessionStorage.getItem("credenciales")
    this.isAuth(token);
  }

  isAuth(token:any): void{
    (token)? this.botonVisible=false:this.botonVisible=true;
  }

}
