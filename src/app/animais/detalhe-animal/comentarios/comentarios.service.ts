import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comentario } from './comentarios';

const API = environment.apiURL

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  constructor(private http: HttpClient) { }

buscaComentario(id: number): Observable<Comentario> {

  return this.http.get<Comentario>(`${API}/photos/${id}/comments`)
}

incluirComentario(id: number, commentText: string):Observable<Comentario> {
  return this.http.post<Comentario>(`${API}/photos/${id}/comments`, {commentText})
}


}
