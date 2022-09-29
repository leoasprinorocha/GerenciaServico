import { AlterarplanoComponent } from './../alterarplano/alterarplano.component';
import { PlanosService } from './../../planos.service';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Plano } from 'src/app/Models/plano';

@Component({
  selector: 'app-plano',
  templateUrl: './plano.component.html',
  styleUrls: ['./plano.component.css'],
})
export class PlanoComponent implements OnInit {
  displayedColumns: string[] = ['nomePlano', 'valorPlano', 'detalhes'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild('paginator') paginator!: MatPaginator;
  constructor(
    private dialogRef: MatDialog,
    private planoService: PlanosService,
    private alterarPlanoComponent: AlterarplanoComponent
  ) {}

  ngOnInit(): void {
    this.dialogRef.closeAll();
    this.getPlanos().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }

  getPlanos() {
    return this.planoService.getPlanos();
  }

  applyFilter(event: Event) {
    debugger;
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  detalharPlano(event: any) {
    this.planoService.idPlano = event.target.dataset.idplano;
    this.alterarPlanoComponent.abreModalDetalhesPlano();
  }
}
