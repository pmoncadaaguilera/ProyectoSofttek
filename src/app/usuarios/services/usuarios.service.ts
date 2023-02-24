import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { RESTCountriesResponse } from '../interfaces/user.interface';

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {

    private apiUrl: string = 'https://jsonplaceholder.typicode.com/'
  
    constructor( private http: HttpClient ) { }
  
    buscarUsuarioPorNombre( termino: string ): Observable<RESTCountriesResponse[]> {
  
      const url = `${ this.apiUrl }users?q=${ termino }`
      console.log(url);
  
      return this.http.get<RESTCountriesResponse[]>( url );
    }
  
  }
  