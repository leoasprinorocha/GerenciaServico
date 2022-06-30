import { CabecalhoModule } from './../componentes/cabecalho/cabecalho.module';
import { TelaPrincipalClienteComponent } from './tela-principal-cliente/tela-principal-cliente.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TelaPrincipalClienteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), CabecalhoModule],
  exports: [RouterModule],
})
export class ClienteRoutingModule {}
