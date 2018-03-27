import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


import { RoutingModule } from './routing/routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroCompComponent } from './hero-comp/hero-comp.component';
import { HollywoodComponent } from './hollywood/hollywood.component';
import { KollywoodComponent } from './kollywood/kollywood.component';
import { BollywoodComponent } from './bollywood/bollywood.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroCompComponent,
    HollywoodComponent,
    KollywoodComponent,
    BollywoodComponent
  ],
  imports: [
    BrowserModule, RoutingModule,
    FormsModule, BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule, MatInputModule, MatToolbarModule, NgxDatatableModule
  ],
  exports:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
