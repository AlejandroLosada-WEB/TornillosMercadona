import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthContainerComponent } from './auth-container/auth-container.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';



const routes:Routes=[
  {
    path:'auth', component:AuthContainerComponent,
    children:[
      {path:'login',component:LoginComponent},
      //{path:'forgot/:token',component:ForgotComponent},
      //{path:'emailverify/:token',component:EmailVerifyComponent},
      {path:'register',component:RegisterComponent},
      {path:'**',redirectTo:'login'},
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class AuthRoutingModule { }
