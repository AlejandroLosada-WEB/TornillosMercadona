import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nabvar-button-logout',
  template: "<button class='boton_secundario' (click)='logout()' type='button'>Cerrar session</button>",
  styleUrls: []
})
export class NabvarButtonLogoutComponent implements OnInit {

  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit(): void {
  }


  logout() : void{
    this.auth.logout().then(()=>{
      sessionStorage.removeItem('credenciales');
      this.router.navigateByUrl("auth/login");
    })
  }
}
