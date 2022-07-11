import { UsuarioService } from './usuario/usuario.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { AppComponent } from '../app.component';
import { tap } from 'rxjs';
import { Usuario } from '../Models/usuario';

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  constructor(
    private httpClient: HttpClient,
    private usuarioService: UsuarioService
  ) {}

  autenticar(email: string, password: string): Observable<HttpResponse<any>> {
    debugger
    const credentials = {
      Email: email,
      Password: password,
    };
    return this.httpClient
      .post(`${AppComponent.apiUrl}authentication/login`, credentials, {
        observe: 'response',
      })
      .pipe(
        tap((res) => {

          let authToken = res.body as Usuario;
          this.usuarioService.salvaToken(authToken ?? '');
        })
      );
  }
}
