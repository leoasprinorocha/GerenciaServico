import { ParametroPagarConta } from './../Models/parametropagarconta';
import { GenericJsonParameter } from './../Models/genericjsonparameter';
import { RetornoPagamentoConta } from './../Models/retornopagamentoconta';
import { BuscaFatura } from './../Models/buscafatura';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppComponent } from '../app.component';
import { Conta } from '../Models/conta';
import { HttpResponse } from '../Models/httpresponse';

@Injectable({
  providedIn: 'root',
})
export class FaturamentoService {
  public idConta!: number;

  constructor(private httpClient: HttpClient) {}

  getFaturas(buscaFatura: BuscaFatura): Observable<Conta[]> {
    return this.httpClient.post<Conta[]>(
      `${AppComponent.apiUrl}Faturamento/RecuperaFaturas`,
      buscaFatura
    );
  }

  getFatura(idConta: number): Observable<Conta> {
    return this.httpClient.get<Conta>(
      `${AppComponent.apiUrl}Faturamento/RecuperaFatura/${idConta}`
    );
  }

  pagarFatura(parametros: ParametroPagarConta): Observable<RetornoPagamentoConta> {
    return this.httpClient.post<RetornoPagamentoConta>(
      `${AppComponent.apiUrl}Faturamento/PagarFatura`, parametros
    );
  }
}
