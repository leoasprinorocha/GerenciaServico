import { AutenticacaoService } from './../autenticacao/autenticacao.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./CSS/home.component.css'],
})
export class HomeComponent implements OnInit {
  invalidLogin: boolean;
  email = '';
  password = '';

  constructor(
    private authService: AutenticacaoService,
    private router: Router
  ) {
    this.invalidLogin = true;
  }

  login(form: NgForm) {
    debugger
    this.authService
      .autenticar(this.email, this.password)
      .subscribe(
        () => {

          this.router.navigate(['clientelogado']);

        },
        (error) => {
          console.log(error);
          alert('Usuário ou senha inválida!');
        }
      );
  }

  ngOnInit(): void {}
}
