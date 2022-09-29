import { AdicionaplanoComponent } from './components/adicionaplano/adicionaplano.component';
import { PlanoComponent } from './components/plano/plano.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'planos',
    component: PlanoComponent,
  },
  {
    path: 'adicionarplano',
    component: AdicionaplanoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanoRoutingModule {}
