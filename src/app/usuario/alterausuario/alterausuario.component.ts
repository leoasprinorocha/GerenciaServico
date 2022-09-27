import { Router } from '@angular/router';
import { DetalhesusuarioComponent } from './../detalhesusuario/detalhesusuario.component';
import { Component, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { UsuarioService } from '../usuario.service';
import { Usuario } from './../../Models/usuario';


@Component({
  selector: 'app-alterausuario',
  templateUrl: './alterausuario.component.html',
  styleUrls: ['./alterausuario.component.css'],
})
export class AlterausuarioComponent implements OnInit {
  displayedColumns: string[] = [
    'nomeCompleto',
    'descricaoPermissao',
    'descricaoStatus',
    'detalhes',
  ];
  dataSource!: MatTableDataSource<any>;
  usuarioCarregado!: Usuario;


  constructor(
    private dialogRef: MatDialog,
    private usuarioService: UsuarioService,
    private detalheUsuarioComponent: DetalhesusuarioComponent,
    private router : Router
  ) {}

  ngOnInit(): void {
    debugger;
    this.dialogRef.closeAll();
    this.usuarioService.recuperaTodosUsuarios().subscribe(
      (data) => {
        this.dataSource = new MatTableDataSource(data);
      },
      (error) => console.log('Error : ', error)
    );
  }

  applyFilter(event: Event) {
    debugger;
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  carregarDetalheUsuario(event: any) {
    debugger
    this.usuarioService.idUsuario = event.target.dataset.idusuario;
    this.detalheUsuarioComponent.abreModalDetalhesUsuario();
  }
}
