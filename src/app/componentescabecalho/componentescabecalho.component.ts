import { Router } from '@angular/router';
import { UsuarioService } from './../autenticacao/usuario/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componentescabecalho',
  templateUrl: './componentescabecalho.component.html',
  styleUrls: ['./componentescabecalho.component.css']
})
export class ComponentescabecalhoComponent {

  user$ = this.usuarioService.retornaUsuarioSubject();

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  logout(){
    this.usuarioService.logOut();
    this.router.navigate(['']);
  }



}
