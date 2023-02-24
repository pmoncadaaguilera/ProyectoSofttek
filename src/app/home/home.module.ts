import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { HomeRoutingModule } from './home-routing.module';
import { FormatoFecha } from './pipes/fecha.pipe';



@NgModule({
  declarations: [
    HomeComponent,
    FormatoFecha
      ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule,
    MaterialModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
