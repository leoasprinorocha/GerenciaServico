import { PlanosService } from './../../planos.service';
import { Plano } from './../../../Models/plano';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';

@Component({
  selector: 'app-adicionaplano',
  templateUrl: './adicionaplano.component.html',
  styleUrls: ['./adicionaplano.component.css'],
})
export class AdicionaplanoComponent implements OnInit {
  value = '0';

  constructor(
    private dialogRef: MatDialog,
    private planoServico: PlanosService
  ) {}

  ngOnInit(): void {
    this.dialogRef.closeAll();
  }

  adicionarPlano() {
    debugger;
    let plano = new Plano();
    plano.nomePlano = String($('#nomePlano').val());
    plano.valorPlano = String($('#valorPlano').val());
    this.planoServico.cadastrarPlano(plano).subscribe(
      (data) => {
        alert(data.message);
      },
      (data) => {
        alert(data.message + "\n" + `Status code: ${data.statusCode}`);
      }
    );
  }
}
