import { Injectable } from '@angular/core';
import { Usuario } from './usuario/usuario';

const KEY = 'token';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  retornaToken() {
    return localStorage.getItem(KEY) ?? "";
  }

  salvaToken(userToken: Usuario) {
    localStorage.setItem(KEY, JSON.stringify(userToken) ?? "");
  }

  excluiToken(){
    localStorage.removeItem(KEY);
  }

  possuiToken(){
    return !!this.retornaToken();
  }
}
