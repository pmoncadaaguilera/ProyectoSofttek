import { Component } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { RESTCountriesResponse } from '../../interfaces/user.interface';
import { UsuarioService } from '../../services/usuarios.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html'
})
export class UsuarioComponent {

  termino: string  = '';
  hayError: boolean = false;
  public usuario: RESTCountriesResponse[] = [];

  constructor( private usuarioService: UsuarioService ) { }

  buscar( termino: string) {
    this.hayError = false;
    this.termino = termino;

    this.usuarioService.buscarUsuarioPorNombre( this.termino )
      .subscribe( (usuario) => {
        this.usuario = usuario;

      }, (err) => {
        this.hayError = true;
        this.usuario = [];
      });

  }

  
  buscando() {

    this.usuarioService.buscarUsuarioPorNombre( this.termino.trim() )
      .subscribe( usuario => this.usuario = usuario );

  }

}
