import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './login.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl = "https://findshop-dev.azurewebsites.net/api/v1/login"
  constructor( private http: HttpClient ) {  }

  entrar(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(this.baseUrl, usuario)
  }

}
