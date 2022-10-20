import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppComponent } from '../app.component';
import { Cliente } from '../Models/cliente';
import { HttpResponse } from '../Models/httpresponse';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private httpClient: HttpClient) { }

  cadastrarCliente(cliente: Cliente): Observable<HttpResponse> {
    return this.httpClient.post<HttpResponse>(
      `${AppComponent.apiUrl}Cliente/CadastrarCliente`,
      cliente
    );
  }

  recuperaClientes(idArea: number): Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>(
      `${AppComponent.apiUrl}Cliente/RecuperaTodosClientes/${idArea}`,
    );
  }
}
