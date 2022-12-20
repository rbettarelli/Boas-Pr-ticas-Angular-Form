import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  constructor(private httpClient: HttpClient) {}

  autenticar(usuario: String, senha: String): Observable<any> {
    return this.httpClient.post('http://localhost:3000', {
      userName: usuario,
      password: senha,
    });
  }
}
