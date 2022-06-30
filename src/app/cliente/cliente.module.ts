import { CabecalhoModule } from './../componentes/cabecalho/cabecalho.module';
import { HomeModule } from './../home/home.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteRoutingModule } from './cliente-routing.module';
import { TelaPrincipalClienteComponent } from './tela-principal-cliente/tela-principal-cliente.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [TelaPrincipalClienteComponent],
  imports: [CommonModule, ClienteRoutingModule, HomeModule, MatDialogModule, CabecalhoModule],
  exports: [TelaPrincipalClienteComponent],
})
export class ClienteModule {}
