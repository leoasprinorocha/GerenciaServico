import { FaturamentoComponent } from './components/faturamento/faturamento.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


const routes: Routes = [
  {
    path: 'faturamento',
    component: FaturamentoComponent
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FaturamentoRoutingModule {}
