import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppComponent } from '../app.component';
import { Area } from './area';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  constructor(private httpClient: HttpClient) { }

  getAreas(): Observable<Area[]>{
    return this.httpClient.get<Area[]>(
      `${AppComponent.apiUrl}Area/RecuperaTodasAreas`
    );
  }



}
