import { SerializationHelper } from 'src/app/uteis/serialization-helper';
import { CustomResponse } from './../../home/custom-response';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../../Models/usuario';
import { TokenService } from './../token.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Permissao } from '../../Models/permissao';
import { AppComponent } from 'src/app/app.component';
import { RegistroUsuario } from 'src/app/Models/registrausuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private usuarioSubject = new BehaviorSubject<Usuario>({});

  constructor(
    private tokenService: TokenService,
    private httpClient: HttpClient
  ) {
    if (this.tokenService.possuiToken()) {
      this.decodificaJWT();
    }
  }

  private decodificaJWT() {
    const token = this.tokenService.retornaToken();
    const usuario = JSON.parse(token) as Usuario;
    this.usuarioSubject.next(usuario);
  }

  retornaUsuarioSubject() {
    debugger;
    return this.usuarioSubject.asObservable();
  }

  salvaToken(userToken: Usuario) {
    this.tokenService.salvaToken(userToken);
    this.decodificaJWT();
  }

  logOut() {
    this.tokenService.excluiToken();
    this.usuarioSubject.next({});
  }

  estaLogado() {
    return this.tokenService.possuiToken();
  }

  recuperaPermissoes(): Observable<Permissao[]> {
    return this.httpClient.get<Permissao[]>(
      `${AppComponent.apiUrl}Usuario/RecuperaPermissoes`
    );
  }

  cadastraUsuario(novoUsuario: RegistroUsuario): Observable<any> {
    return this.httpClient
      .post(`${AppComponent.apiUrl}Authentication/register`, novoUsuario);


  }
}
