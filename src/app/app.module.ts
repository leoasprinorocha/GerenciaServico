import { CabecalhoModule } from './componentes/cabecalho/cabecalho.module';

import { UteisModule } from './uteis/uteis.module';
import { ClienteRoutingModule } from './cliente/cliente-routing.module';
import { HomeModule } from './home/home.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptor } from './uteis/loading.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxMaskModule } from 'ngx-mask';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HomeModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    ClienteRoutingModule,
    UteisModule,
    BrowserAnimationsModule,
    MatDialogModule,
    CabecalhoModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters: false
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
