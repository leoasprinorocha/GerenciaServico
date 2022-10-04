import { AdicionaenderecoComponent } from './../../../area/adicionaendereco/adicionaendereco.component';
import { ClienteService } from './../../cliente.service';
import { PlanosService } from './../../../planos/planos.service';
import { UsuarioService } from './../../../usuario/usuario.service';
import { AreaService } from 'src/app/area/area.service';
import { MatDialog } from '@angular/material/dialog';
import { Component, Injectable, OnInit } from '@angular/core';
import { Endereco } from 'src/app/Models/endereco';
import { Usuario } from 'src/app/Models/usuario';
import { Plano } from 'src/app/Models/plano';
import { Cliente } from 'src/app/Models/cliente';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-cadastrarcliente',
  templateUrl: './cadastrarcliente.component.html',
  styleUrls: ['./cadastrarcliente.component.css'],
})
export class CadastrarclienteComponent implements OnInit {
  todayDate: Date = new Date();
  planosArray: Plano[] = [];
  idEndereco!: number;
  idPlano!: number;
  phoneMask = '(00) 00000-0000';

  constructor(
    private dialogRef: MatDialog,
    private areaService: AreaService,
    private userService: UsuarioService,
    private planoService: PlanosService,
    private clienteService: ClienteService,
    public adicionaEnderecoComponent: AdicionaenderecoComponent
  ) {}

  ngOnInit(): void {
    debugger;
    this.dialogRef.closeAll();
    let user = new Usuario();
    this.userService.retornaUsuarioSubject().subscribe((data) => {
      user = data;
    });

      this.planoService.getPlanos().subscribe((data) => {
        this.planosArray = data;
      });

  }

  adicionarCliente() {
    let cliente = new Cliente();
    cliente.nome = String($('#nomeCliente').val());
    cliente.telefone = String($('#telefoneCliente').val())
      .replace('(', '')
      .replace(')', '')
      .replace(' ', '')
      .replace('-', '');
    cliente.dataVencimentoString = String($('#dataVencimentoCliente').val());
    cliente.idEndereco = this.idEndereco;
    cliente.numeroCasa = Number($('#numeroCasaCliente').val());
    cliente.complemento = String($('#complementoCliente').val());
    cliente.idPlano = this.idPlano;

    this.clienteService.cadastrarCliente(cliente).subscribe((data) => {
      alert(data.message);
    })

  }

  enderecoSelect(event: any) {
    debugger;
    this.idEndereco = Number(event.source.id);
  }

  cadastrarNovoEndereco(){
    this.adicionaEnderecoComponent.abreModalCadastroEndereco();
  }

  changePlano(event: any) {
    this.idPlano = Number(event.source.value);
  }
}
