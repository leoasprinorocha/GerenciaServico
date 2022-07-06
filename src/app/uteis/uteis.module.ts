import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MensagemComponent } from './mensagem/mensagem.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { EventsHandlerComponent } from './events-handler/events-handler.component';



@NgModule({
  declarations: [
    MensagemComponent,
    SpinnerComponent,
    EventsHandlerComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MensagemComponent,
    SpinnerComponent,
    EventsHandlerComponent
  ]
})
export class UteisModule { }
