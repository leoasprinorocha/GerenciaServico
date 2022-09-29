import { DetalhesAreaComponent } from './../detalhesarea/detalhesarea.component';
import { MatDialog } from '@angular/material/dialog';
import { AreaService } from './../area.service';
import { Component, Injectable, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css'],
})
export class AreaComponent implements OnInit {
  displayedColumns: string[] = ['nomeArea', 'numeroArea', 'idArea'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild('paginator') paginator!: MatPaginator;

  constructor(private areaService: AreaService,
              private dialogRef: MatDialog,
              private detalhesAreaComponent: DetalhesAreaComponent) {}

  getAreas() {
    return this.areaService.getAreas();
  }

  ngOnInit(): void {
    this.dialogRef.closeAll();
    this.getAreas().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(event: Event) {
    debugger;
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  detalharArea(event: any) {
    this.areaService.idArea = event.target.dataset.idarea;
    this.detalhesAreaComponent.abreModalDetalhesArea();
  }
}
