import { MatDialog } from '@angular/material/dialog';
import { AreaService } from './../area.service';
import { Component, Injectable, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {

  displayedColumns: string[] = [
    'nomeArea',
  ];
  dataSource!: MatTableDataSource<any>;

  constructor(private areaService: AreaService, private dialogRef: MatDialog) { }


  getAreas(){
    return this.areaService.getAreas();
  }

  ngOnInit(): void {
    this.dialogRef.closeAll();
  }

  applyFilter(event: Event) {
    debugger;
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
