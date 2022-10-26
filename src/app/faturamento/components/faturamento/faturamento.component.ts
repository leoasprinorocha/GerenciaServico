import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faturamento',
  templateUrl: './faturamento.component.html',
  styleUrls: ['./faturamento.component.css']
})
export class FaturamentoComponent implements OnInit {

  constructor(private dialogRef: MatDialog) { }

  ngOnInit(): void {
     this.dialogRef.closeAll();
  }

  buscar(){
    var valorBusca = $('#inputBusca').val();
  }

}
