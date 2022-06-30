import { MenuComponent } from './../../home/menu/menu.component';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-tela-principal-cliente',
  templateUrl: './tela-principal-cliente.component.html',
  styleUrls: ['./tela-principal-cliente.component.css']
})
export class TelaPrincipalClienteComponent {

  constructor(private dialogRef: MatDialog) { }

  abreMenu(){
    this.dialogRef.open(MenuComponent, {
      height: '500px',
      width: '300px',
      hasBackdrop: true,
      backdropClass: 'menuModal'

    })
  }



}
