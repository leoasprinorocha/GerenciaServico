import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrarcliente',
  templateUrl: './cadastrarcliente.component.html',
  styleUrls: ['./cadastrarcliente.component.css']
})
export class CadastrarclienteComponent implements OnInit {
  todayDate:Date = new Date();

  constructor(private dialogRef: MatDialog) { }

  ngOnInit(): void {
    this.dialogRef.closeAll();
  }

  adicionarCliente(){

  }

}
