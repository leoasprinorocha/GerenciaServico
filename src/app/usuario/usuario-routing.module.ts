import { DetalhesusuarioComponent } from './detalhesusuario/detalhesusuario.component';
import { TelaPrincipalClienteComponent } from './../cliente/tela-principal-cliente/tela-principal-cliente.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'telaprincipal',
    component: TelaPrincipalClienteComponent,
  },
  {
    path: 'detalhesusuario/:idUsuario',
    component: DetalhesusuarioComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioRoutingModule {}
