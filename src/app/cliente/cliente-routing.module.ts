import { ClientesComponent } from './components/clientes/clientes.component';
import { CadastrarclienteComponent } from './components/cadastrarcliente/cadastrarcliente.component';
import { CabecalhoModule } from './../componentes/cabecalho/cabecalho.module';
import { TelaPrincipalClienteComponent } from './tela-principal-cliente/tela-principal-cliente.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TelaPrincipalClienteComponent,
  },
  {
    path: 'adicionarcliente',
    component: CadastrarclienteComponent
  },
  {
    path: 'clientes',
    component: ClientesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), CabecalhoModule],
  exports: [RouterModule],
})
export class ClienteRoutingModule {}
