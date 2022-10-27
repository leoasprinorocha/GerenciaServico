import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';
import { FaturamentoRoutingModule } from './faturamento-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaturamentoComponent } from './components/faturamento/faturamento.component';
import { MatInputModule } from '@angular/material/input';



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
    MatRadioModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule
  ]
})
export class FaturamentoModule { }
