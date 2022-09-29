import { PlanosService } from './../../planos.service';
import { MatDialog } from '@angular/material/dialog';
import { Component, Injectable, OnInit } from '@angular/core';
import { Plano } from 'src/app/Models/plano';

@Component({
  selector: 'app-alterarplano',
  templateUrl: './alterarplano.component.html',
  styleUrls: ['./alterarplano.component.css'],
})

@Injectable({
  providedIn: 'root',
})
export class AlterarplanoComponent implements OnInit {
  public planoCarregado!: Plano;
  constructor(
    private dialogRef: MatDialog,
    private planoService: PlanosService
  ) {}

  ngOnInit(): void {
    this.planoService
      .getPlanoById(this.planoService.idPlano)
      .subscribe((data) => {
        this.planoCarregado = data;
      });
  }

  abreModalDetalhesPlano() {
    this.dialogRef.open(AlterarplanoComponent, {
      height: '500px',
      width: '350px',
      hasBackdrop: true,
      backdropClass: 'menuModal',
    });
  }
  fechaModal(){
    this.dialogRef.closeAll();
  }

  alterarPlano(){

  }
}
