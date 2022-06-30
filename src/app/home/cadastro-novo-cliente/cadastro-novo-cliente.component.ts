import { CadastroNovoUsuario } from './cadastro-novo-usuario';
import { RegistroCliente } from './registro-cliente';
import { CadastroNovoClienteService } from './cadastro-novo-cliente.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-novo-cliente',
  templateUrl: './cadastro-novo-cliente.component.html',
  styleUrls: ['./cadastro-novo-cliente.component.scss'],
})
export class CadastroNovoClienteComponent implements OnInit {
  novoUsuarioForm!: FormGroup;
  novoUsuario!: RegistroCliente;

  constructor(
    private formBuilder: FormBuilder,
    private novoUsuarioService: CadastroNovoClienteService
  ) {}

  ngOnInit(): void {
    this.novoUsuarioForm = this.formBuilder.group({
      email: ['',[
        Validators.required,
        Validators.email
      ]],
      password: [''],
      confirmPassword: [''],
      nome: ['', [Validators.required, Validators.minLength(5)]],
      telefone: [''],
      endereco: [''],
    });
  }

  cadastrar() {
    this.novoUsuario = this.novoUsuarioForm.getRawValue() as RegistroCliente;

    let cadastroNovoUsuario: CadastroNovoUsuario = {
      nome: this.novoUsuario.nome,
      telefone: this.novoUsuario.telefone,
      endereco: this.novoUsuario.endereco,
    };

    this.novoUsuario.cliente = cadastroNovoUsuario;
    console.log(this.novoUsuario);
    this.novoUsuario.cliente.nome = this.novoUsuario.nome;
    this.novoUsuario.cliente.telefone = this.novoUsuario.telefone;
    this.novoUsuario.cliente.endereco = this.novoUsuario.endereco;

    var response = this.novoUsuarioService.cadastraNovoUsuario(this.novoUsuario);
    console.log(response);
    alert(response.message);
  }
}
