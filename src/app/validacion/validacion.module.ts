import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidacionesComponent } from './validaciones/validaciones.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { ValidacionRoutingModule } from './validacion-routing.module';



@NgModule({
  declarations: [
    ValidacionesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule,
    ValidacionRoutingModule
  ]
})
export class ValidacionModule { }
