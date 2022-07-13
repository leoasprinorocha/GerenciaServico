import { DetalhesusuarioComponent } from './../detalhesusuario/detalhesusuario.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { UsuarioService } from '../usuario.service';
import { Usuario } from './../../Models/usuario';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-alterausuario',
  templateUrl: './alterausuario.component.html',
  styleUrls: ['./alterausuario.component.css'],
})
export class AlterausuarioComponent implements OnInit {

  displayedColumns: string[] = [
    'nomeCompleto',
    'descricaoPermissao',
    'detalhes'
  ];
  dataSource!: MatTableDataSource<any>;

  constructor(
    private dialogRef: MatDialog,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    debugger;
    this.dialogRef.closeAll();
    this.usuarioService.recuperaTodosUsuarios().subscribe(
      data =>{this.dataSource = new MatTableDataSource(data);
              },
      (error) => console.log('Error : ', error)
    );

    console.log(this.dataSource);
  }

  applyFilter(event: Event) {
    debugger;
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  carregarDetalheUsuario(event:any){
    this.dialogRef.open(DetalhesusuarioComponent, {
      height: '700px',
      width: '600px',
      hasBackdrop: true,
      backdropClass: 'menuModal'

    })
  }
}
