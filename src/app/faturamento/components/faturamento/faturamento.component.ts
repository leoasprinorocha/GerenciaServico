import { FaturamentoService } from './../../faturamento.service';
import { data } from 'jquery';
import { BuscaFatura } from './../../../Models/buscafatura';
import { UsuarioService } from './../../../usuario/usuario.service';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Usuario } from 'src/app/Models/usuario';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-faturamento',
  templateUrl: './faturamento.component.html',
  styleUrls: ['./faturamento.component.css'],
})
export class FaturamentoComponent implements OnInit {
  public user!: Usuario;
  public tipoBusca!: string;

  displayedColumns: string[] = ['nome', 'situacao', 'datavencimento', 'acoes'];

  dataSource!: MatTableDataSource<any>;
  @ViewChild('paginator') paginator!: MatPaginator;

  constructor(
    private dialogRef: MatDialog,
    private userService: UsuarioService,
    private faturamentoService: FaturamentoService
  ) {}

  ngOnInit(): void {
    this.dialogRef.closeAll();
    this.user = new Usuario();
    this.userService.retornaUsuarioSubject().subscribe((data) => {
      this.user = data;
    });
  }

  applyFilter(event: Event) {
    debugger;
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  buscar() {
    debugger
    let buscaFatura = new BuscaFatura(
      String($('#inputBusca').val()),
      this.tipoBusca,
      Number(this.user.idArea)
    );

    this.faturamentoService.getFaturas(buscaFatura).subscribe(
      (data) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        return;
      },
      (error) => console.log('Error : ', error)

    );
  }

  changeTipoBusca(event: any) {
    debugger;
    this.tipoBusca = String(event.source.value);
  }
}
