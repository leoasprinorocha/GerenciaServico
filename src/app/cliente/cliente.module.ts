import { CabecalhoModule } from './../componentes/cabecalho/cabecalho.module';
import { HomeModule } from './../home/home.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteRoutingModule } from './cliente-routing.module';
import { TelaPrincipalClienteComponent } from './tela-principal-cliente/tela-principal-cliente.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CadastrarclienteComponent } from './components/cadastrarcliente/cadastrarcliente.component';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [TelaPrincipalClienteComponent, CadastrarclienteComponent],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    HomeModule,
    MatDialogModule,
    CabecalhoModule,
    MatPaginatorModule,
    MatTableModule,
    MatSelectModule,
    MatToolbarModule,
    MatDialogModule,
    MatCardModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    CurrencyMaskModule,
    NgxMaskModule

  ],
  exports: [TelaPrincipalClienteComponent, CadastrarclienteComponent],
})
export class ClienteModule {}
