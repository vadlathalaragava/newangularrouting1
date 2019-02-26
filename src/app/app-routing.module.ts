import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component'
import { LoginComponent } from './login/login.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { RegisterComponent } from './register/register.component'
import { LogoutComponent } from './logout/logout.component'

const routes: Routes = [
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"homepage",
    component:HomepageComponent
  },
  {
    path:"register",
    component:RegisterComponent
  },
  {
    path:"dashboard",
    component:DashboardComponent
  },
  {
    path:"logout",
    component:LogoutComponent
  },
  {
    path:'',
    redirectTo:'/dashboard',
    pathMatch:'full'

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
