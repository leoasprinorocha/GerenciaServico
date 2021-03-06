import { TelaPrincipalClienteComponent } from './../../cliente/tela-principal-cliente/tela-principal-cliente.component';
import { Usuario } from '../../Models/usuario';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/autenticacao/token.service';
import { Rotina } from '../../Models/rotina';
import { Observable, tap, map } from 'rxjs';
import { AppComponent } from 'src/app/app.component';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css', './estilobotoes.css'],
})
export class MenuComponent {
  rotinas$!: Observable<Rotina[]>;

  constructor(
    private httpClient: HttpClient,
    private tokenService: TokenService
  ) {}

  user = JSON.parse(this.tokenService.retornaToken()) as Usuario;

  getRotinas() {
    debugger;
    let idPermissao = this.user.idPermissao;
    this.rotinas$ = this.httpClient.get<Rotina[]>(
      `${AppComponent.apiUrl}Usuario/RecuperaRotinasUsuario/${idPermissao}`
    );
  }

  ngOnInit() {
    this.getRotinas();
  }
}
