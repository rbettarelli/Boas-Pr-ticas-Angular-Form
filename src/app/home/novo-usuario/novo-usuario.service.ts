import { Observable } from 'rxjs/internal/Observable';
import { NovoUsuario } from './novo-usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {

  constructor(private http: HttpClient) {}


    cadastraNovoUsuario(novoUsuario: NovoUsuario)  {
      return this.http.post('hhtp://localhost:3000/user/signup', novoUsuario)
    }

}
