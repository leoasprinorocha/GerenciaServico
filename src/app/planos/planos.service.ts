import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AppComponent } from '../app.component';
import { HttpResponse } from '../Models/httpresponse';
import { Plano } from '../Models/plano';

@Injectable({
  providedIn: 'root',
})
export class PlanosService {
  public idPlano!: number;
  constructor(private httpClient: HttpClient) {}

  cadastrarPlano(plano: Plano): Observable<HttpResponse> {
    return this.httpClient.post<HttpResponse>(
      `${AppComponent.apiUrl}Servico/CadastrarPlano`,
      plano
    );
  }

  getPlanos(): Observable<Plano[]> {
    return this.httpClient.get<Plano[]>(
      `${AppComponent.apiUrl}Servico/RecuperaPlanos`
    );
  }

  getPlanoById(idPlano: number): Observable<Plano> {
    return this.httpClient.get<Plano>(
      `${AppComponent.apiUrl}Servico/RecuperaPlanoPorId/${idPlano}`
    );
  }
}
