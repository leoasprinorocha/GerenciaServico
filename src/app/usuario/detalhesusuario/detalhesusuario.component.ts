import { StatusUsuario } from './../../Models/statususuario';
import { AtualizaUsuario } from './../../Models/AtualizaUsuario';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Component, Injectable, Input, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Models/usuario';
import { UsuarioService } from '../usuario.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Area } from 'src/app/Models/area';
import { Permissao } from 'src/app/Models/permissao';
import { AreaService } from 'src/app/area/area.service';
import { RegistroUsuario } from 'src/app/Models/registrausuario';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-detalhesusuario',
  templateUrl: './detalhesusuario.component.html',
  styleUrls: ['./detalhesusuario.component.css'],
})
export class DetalhesusuarioComponent implements OnInit {
  usuarioCarregado!: Usuario;
  usuarioForm!: FormGroup;
  usuarioAtualizado!: AtualizaUsuario;

  public areasArray: Area[] = [];
  public permissoesArray: Permissao[] = [];
  public statusUsuariosArray: StatusUsuario[] = [];
  public idAreaUser!: number;
  public idPermissaoUser!: number;
  public idStatusUser!: number;

  constructor(
    private usuarioService: UsuarioService,
    private areaService: AreaService,
    private router: Router,
    private dialogRef: MatDialog
  ) {}


  ngOnInit(): void {
    this.usuarioService
      .recuperaUsuario(String(this.usuarioService.idUsuario))
      .subscribe((data) => {
        this.usuarioCarregado = data;

        this.areaService
          .getAreas()
          .subscribe((data) => (this.areasArray = data));

        this.usuarioService
          .recuperaPermissoes()
          .subscribe((data) => (this.permissoesArray = data));

        this.usuarioService
        .recuperaStatusUsuarios()
        .subscribe((data) => (this.statusUsuariosArray = data));


      });
  }

  abreModalDetalhesUsuario() {
    this.dialogRef.open(DetalhesusuarioComponent, {
      height: '500px',
      width: '350px',
      hasBackdrop: true,
      backdropClass: 'menuModal',
    });
  }

  changeArea(event: any) {
    this.idAreaUser = event.source.value;
  }

  changePermissao(event: any) {
    this.idPermissaoUser = event.source.value;
  }

  changeStatus(event: any) {
    this.idStatusUser = event.source.value;
  }

  alterar() {
    debugger;
    this.usuarioAtualizado = this.usuarioForm.getRawValue() as RegistroUsuario;
    this.usuarioAtualizado.idArea = this.idAreaUser;
    this.usuarioAtualizado.idPermissao = this.idPermissaoUser;
    this.usuarioService.atualizaUsuario(this.usuarioAtualizado).subscribe(
      (data) => {
        this.router.navigate(['clientelogado']);
        alert(data.message);
      },
      (error) => {
        alert('Erro ao cadastrar cliente' + error);
      }
    );
  }
}
