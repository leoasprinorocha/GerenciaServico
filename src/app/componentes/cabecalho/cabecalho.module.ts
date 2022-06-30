import { ComponentescabecalhoComponent } from './../../componentescabecalho/componentescabecalho.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [ComponentescabecalhoComponent],
  imports: [
    CommonModule,
    RouterModule,

  ],
  exports:[
    ComponentescabecalhoComponent
  ]
})
export class CabecalhoModule { }
