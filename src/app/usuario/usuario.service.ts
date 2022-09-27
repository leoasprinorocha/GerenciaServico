import { StatusUsuario } from './../Models/statususuario';
import { SerializationHelper } from 'src/app/uteis/serialization-helper';
import { CustomResponse } from '../home/custom-response';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../Models/usuario';
import { TokenService } from '../autenticacao/token.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Permissao } from '../Models/permissao';
import { AppComponent } from 'src/app/app.component';
import { RegistroUsuario } from 'src/app/Models/registrausuario';
import { AtualizaUsuario } from '../Models/AtualizaUsuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private usuarioSubject = new BehaviorSubject<Usuario>({});
  public idUsuario: String = '';

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

  recuperaTodosUsuarios(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(
      `${AppComponent.apiUrl}Usuario/RecuperaTodosUsuarios`
    );
  }

  recuperaStatusUsuarios(): Observable<StatusUsuario[]> {
    return this.httpClient.get<StatusUsuario[]>(
      `${AppComponent.apiUrl}Usuario/RecuperaStatusUsuarios`
    );
  }

  recuperaUsuario(idUsuario: string): Observable<Usuario> {
    const header = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('idUsuario', idUsuario);

    let url = `${AppComponent.apiUrl}Usuario/RecuperaUsuarioAplicacao`;
    return this.httpClient.get<Usuario>(url, { 'headers': header });
  }

  cadastraUsuario(novoUsuario: RegistroUsuario): Observable<any> {
    return this.httpClient.post(
      `${AppComponent.apiUrl}Authentication/register`,
      novoUsuario
    );
  }

  atualizaUsuario(usuarioAtualizado: AtualizaUsuario): Observable<any> {
    return this.httpClient.put(
      `${AppComponent.apiUrl}Usuario/AlteraUsuarioAplicacao`,
      usuarioAtualizado
    );
  }
}
