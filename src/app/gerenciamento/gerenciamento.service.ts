import { Injectable } from '@angular/core';
import { Produto } from './gerenciamento.models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GerenciamentoService {
  estabBaseUrl = "https://findshop-dev.azurewebsites.net/api/v1/login"
  ProdBaseUrl = "https://findshop-dev.azurewebsites.net/api/v1/products"
  constructor(private http: HttpClient) { }

  createProduct(produto: Produto): Observable<Produto>{
    return this.http.post<Produto>(this.ProdBaseUrl, produto)
  }
}
