import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HeroCompComponent } from '../hero-comp/hero-comp.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AppComponent } from '../app.component';
import { BollywoodComponent } from '../bollywood/bollywood.component';
import { KollywoodComponent } from '../kollywood/kollywood.component';
import { HollywoodComponent } from '../hollywood/hollywood.component';

const route :Routes =[
  {path:'', redirectTo:'/dashboard',  pathMatch:'full'},
  {path:'dashboard', component: DashboardComponent },
  {path:'hero', component: HeroCompComponent },
  {path:'bolly', component: BollywoodComponent },
  {path:'kolly', component: KollywoodComponent },
  {path:'holly', component: HollywoodComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(route),
    CommonModule
  ],
  exports:[RouterModule]
  
})
export class RoutingModule { }
