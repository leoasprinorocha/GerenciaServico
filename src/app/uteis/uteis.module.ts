import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MensagemComponent } from './mensagem/mensagem.component';
import { SpinnerComponent } from './spinner/spinner.component';



@NgModule({
  declarations: [
    MensagemComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MensagemComponent,
    SpinnerComponent
  ]
})
export class UteisModule { }
