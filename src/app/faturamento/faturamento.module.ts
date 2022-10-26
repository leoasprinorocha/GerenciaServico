import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';
import { FaturamentoRoutingModule } from './faturamento-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaturamentoComponent } from './components/faturamento/faturamento.component';



@NgModule({
  declarations: [
    FaturamentoComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatToolbarModule,
    FaturamentoRoutingModule,
    MatDialogModule,
    MatRadioModule
  ]
})
export class FaturamentoModule { }
