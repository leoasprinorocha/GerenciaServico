import { ClienteModule } from './../cliente/cliente.module';
import { MatSelectModule } from '@angular/material/select';
import { AreaModule } from './../area/area.module';
import { HomeRoutingModule } from './../home/home-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CriausuarioComponent } from './criausuario/criausuario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UteisModule } from '../uteis/uteis.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';



@NgModule({
  declarations: [CriausuarioComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    AreaModule,
    FormsModule,
    UteisModule,
    FormsModule,
    MatSelectModule,
    ReactiveFormsModule,
    HomeRoutingModule
  ],
  exports: [CriausuarioComponent],
})
export class UsuarioModule {}
