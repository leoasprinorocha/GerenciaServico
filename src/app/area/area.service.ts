import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppComponent } from '../app.component';
import { Area } from '../Models/area';
import { HttpResponse } from '../Models/httpresponse';

@Injectable({
  providedIn: 'root',
})
export class AreaService {
  public idArea!: number;

  constructor(private httpClient: HttpClient) {}

  getAreas(): Observable<Area[]> {
    return this.httpClient.get<Area[]>(
      `${AppComponent.apiUrl}Area/RecuperaTodasAreas`
    );
  }

  getAreaById(idArea: number): Observable<Area> {
    return this.httpClient.get<Area>(
      `${AppComponent.apiUrl}Area/RecuperaAreaPorId/${idArea}`
    );
  }

  alterarArea(area: Area): Observable<HttpResponse> {
    return this.httpClient.put<HttpResponse>(
      `${AppComponent.apiUrl}Area/AlterarArea`,
      area
    );
  }

  cadastrarArea(area: Area): Observable<HttpResponse> {
    return this.httpClient.post<HttpResponse>(
      `${AppComponent.apiUrl}Area/CadastrarArea`,
      area
    );
  }
}
