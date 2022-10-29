import { ParametroPagarConta } from './../../../Models/parametropagarconta';
import { data } from 'jquery';
import { FaturamentoService } from './../../faturamento.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Component, Injectable, OnInit } from '@angular/core';
import { Conta } from 'src/app/Models/conta';
import { GenericJsonParameter } from 'src/app/Models/genericjsonparameter';

@Component({
  selector: 'app-tratamentofatura',
  templateUrl: './tratamentofatura.component.html',
  styleUrls: ['./tratamentofatura.component.css']
})

@Injectable({
  providedIn: 'root',
})
export class TratamentofaturaComponent implements OnInit {
  public contaCarregada!: Conta;
  public deveMostrarBotaoPagar!: boolean;

  constructor(private dialogRef: MatDialog, private faturamentoService: FaturamentoService) { }

  ngOnInit(): void {
    this.faturamentoService.getFatura(this.faturamentoService.idConta).subscribe((data) => {
      this.contaCarregada = data;
      if(this.contaCarregada.idSituacaoConta != 2)
        this.deveMostrarBotaoPagar = true;

    });
  }

  abreModalTratamentoFatura(){
    this.dialogRef.open(TratamentofaturaComponent, {
      height: '500px',
      width: '350px',
      hasBackdrop: true,
      backdropClass: 'menuModal',
    });
  }

  fechaModal(){
    this.dialogRef.closeAll();
  }

  iniciarTratamentoConta(){
    debugger
    if(confirm("Tem certeza que deseja marcar conta como paga?"+name)) {
      var parametros = new ParametroPagarConta();
      parametros.idConta = 5;
      parametros.idUsuario = "gbfnbjgnfk";

      this.faturamentoService.pagarFatura(parametros).subscribe(data => {
        alert('Fatura paga com sucesso!' + '\n' + '\n' +
        `Nome cliente: ${data.nomeCliente}` + '\n' + '\n' +
        `Valor pago: ${data.valorPago}` + '\n' + '\n' +
        `Ano mês: ${data.anoMes}` + '\n' + '\n' +
        `Nome vendedor: ${data.nomeOperadorArea}`);

        window.location.reload();
      });
    }
  }

}
