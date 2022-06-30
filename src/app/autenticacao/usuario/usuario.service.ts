import { Usuario } from './usuario';
import { TokenService } from './../token.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {

  private usuarioSubject = new BehaviorSubject<Usuario>({});

  constructor(private tokenService: TokenService) {
    if(this.tokenService.possuiToken()){
      this.decodificaJWT();
    }
  }

  private decodificaJWT(){
    const token = this.tokenService.retornaToken();
    const usuario = JSON.parse(token) as Usuario;
    this.usuarioSubject.next(usuario);
  }

  retornaUsuarioSubject(){
    debugger
    return this.usuarioSubject.asObservable();
  }

  salvaToken(userToken:Usuario){
    this.tokenService.salvaToken(userToken);
    this.decodificaJWT();
  }

  logOut(){
    this.tokenService.excluiToken();
    this.usuarioSubject.next({});
  }

  estaLogado(){
    return this.tokenService.possuiToken();
  }
}
