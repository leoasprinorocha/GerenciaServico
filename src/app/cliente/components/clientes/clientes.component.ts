import { UsuarioService } from './../../../usuario/usuario.service';
import { ClienteService } from './../../cliente.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/Models/usuario';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  displayedColumns: string[] = [
    'nomeCompleto',
    'situacao',
    'datavencimento',
    'detalhes',
  ];
  dataSource!: MatTableDataSource<any>;
  @ViewChild('paginator') paginator!: MatPaginator;
  public user!: Usuario;

  constructor(private dialogRef: MatDialog, private clienteService: ClienteService, private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    debugger
    this.dialogRef.closeAll();

    this.user = new Usuario();
    this.usuarioService.retornaUsuarioSubject().subscribe((data) => {
      this.user = data;

      this.clienteService.recuperaClientes(Number(this.user.idArea)).subscribe(
        (data) => {
          this.dataSource = new MatTableDataSource(data);
          this.dataSource.paginator = this.paginator;
        },
        (error) => console.log('Error : ', error)
      );

    });


  }

  applyFilter(event: Event) {
    debugger;
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }

}
