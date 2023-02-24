import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { MaterialModule } from '../material/material.module';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { RouterModule } from '@angular/router';
import { UsuarioTablaComponent } from './components/usuario-tabla/usuario-tabla.component';
import { UsuarioInputComponent } from './components/usuario-input/usuario-input.component';



@NgModule({
  declarations: [
    UsuarioComponent,
    UsuarioTablaComponent,
    UsuarioInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    RouterModule,
    UsuarioRoutingModule
  ]
})
export class UsuariosModule { }
