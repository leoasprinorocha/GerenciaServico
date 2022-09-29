import { AdicionarareaComponent } from './adicionararea/adicionararea.component';
import { AreaComponent } from './area/area.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'areas',
    component: AreaComponent,
  },
  {
    path: 'criararea',
    component: AdicionarareaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AreaRoutingModule {}
