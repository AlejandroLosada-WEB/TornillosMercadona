import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/services/auth.guard';
import { ProductosContainerComponent } from './productos-container/productos-container.component';




const routes:Routes=[

  {
    path:'productos/:categoria', component:ProductosContainerComponent,
    canActivate:[AuthGuard],
    children:[
      //{path:'',component:COMPONENTEHIJO},
      {path:'**',redirectTo:'productos'},
    ]
  },
  {
    path:'productos/', component:ProductosContainerComponent,
    canActivate:[AuthGuard],
    children:[
      //{path:'',component:COMPONENTEHIJO},
      {path:'**',redirectTo:'productos'},
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class ProductoRoutingModule { }
