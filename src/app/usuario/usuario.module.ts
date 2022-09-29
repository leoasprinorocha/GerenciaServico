import { ClienteModule } from './../cliente/cliente.module';
import { MatSelectModule } from '@angular/material/select';
import { AreaModule } from './../area/area.module';
import { HomeRoutingModule } from './../home/home-routing.module';
import { CommonModule } from '@angular/common';
import { CriausuarioComponent } from './criausuario/criausuario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UteisModule } from '../uteis/uteis.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { AlterausuarioComponent } from './alterausuario/alterausuario.component';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { DetalhesusuarioComponent } from './detalhesusuario/detalhesusuario.component';
import { MatPaginatorModule } from '@angular/material/paginator';



@NgModule({
  declarations: [CriausuarioComponent, AlterausuarioComponent, DetalhesusuarioComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    AreaModule,
    FormsModule,
    UteisModule,
    FormsModule,
    MatSelectModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatPaginatorModule
  ],
  exports: [CriausuarioComponent, AlterausuarioComponent],
})
export class UsuarioModule {}
