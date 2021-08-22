import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario, Datum } from '../interfaces/usuarios.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor( private http: HttpClient ) { }

  getUsuarios(): Observable<Usuario> {
    return this.http.get<Usuario>('https://reqres.in/api/users?page=2');
  }

  getUsuarioPorId( id: number ):Observable<Usuario> {
    return this.http.get<Usuario>(`https://reqres.in/api/users/${id}`)
  }
  

}
