import { AlterausuarioComponent } from './../usuario/alterausuario/alterausuario.component';
import { TelaPrincipalClienteComponent } from './../cliente/tela-principal-cliente/tela-principal-cliente.component';
import { CriausuarioComponent } from './../usuario/criausuario/criausuario.component';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'cadastronovousuario',
    component: CriausuarioComponent,
  },
  {
    path: 'alterausuario',
    component: AlterausuarioComponent,
  },
  {
    path: 'telaprincipal',
    component: TelaPrincipalClienteComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
