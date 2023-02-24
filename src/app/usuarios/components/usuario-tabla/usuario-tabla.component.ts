import { Component, Input } from '@angular/core';
import { RESTCountriesResponse } from '../../interfaces/user.interface';

@Component({
  selector: 'app-usuario-tabla',
  templateUrl: './usuario-tabla.component.html',
  styles: [
  ]
})
export class UsuarioTablaComponent {

  @Input() usuarios: RESTCountriesResponse[] = [];
}
