import { BuscaFatura } from './../Models/buscafatura';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppComponent } from '../app.component';
import { Conta } from '../Models/conta';

@Injectable({
  providedIn: 'root'
})
export class FaturamentoService {

  constructor(private httpClient: HttpClient) { }

  getFaturas(buscaFatura: BuscaFatura): Observable<Conta[]> {
    return this.httpClient.post<Conta[]>(
      `${AppComponent.apiUrl}Faturamento/RecuperaFaturas`, buscaFatura
    );
  }
}
