import { HttpClientModule } from '@angular/common/http';
import { NgxMaskModule } from 'ngx-mask';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanoComponent } from './components/plano/plano.component';
import { AdicionaplanoComponent } from './components/adicionaplano/adicionaplano.component';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { AlterarplanoComponent } from './components/alterarplano/alterarplano.component';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';



@NgModule({
  declarations: [
    PlanoComponent,
    AdicionaplanoComponent,
    AlterarplanoComponent
  ],
  imports: [
    CommonModule,
    NgxMaskModule.forChild(),
    CurrencyMaskModule,
    HttpClientModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatDialogModule,
    MatPaginatorModule
  ],
  exports: [
    AlterarplanoComponent
  ]
})
export class PlanosModule { }
