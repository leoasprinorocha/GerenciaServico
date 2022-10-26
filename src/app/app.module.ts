import { FaturamentoModule } from './faturamento/faturamento.module';
import { ClienteModule } from './cliente/cliente.module';
import { PlanosModule } from './planos/planos.module';
import { PlanoRoutingModule } from './planos/plano-routing.module';
import { AreaRoutingModule } from './area/area-rounting.module';
import { UsuarioRoutingModule } from './usuario/usuario-routing.module';
import { UsuarioModule } from './usuario/usuario.module';
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
import { AreaModule } from './area/area.module';
import { MAT_DATE_LOCALE } from '@angular/material/core';



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HomeModule,
    AreaModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    ClienteRoutingModule,
    UsuarioRoutingModule,
    AreaRoutingModule,
    PlanoRoutingModule,
    PlanosModule,
    ClienteModule,
    UteisModule,
    FaturamentoModule,
    BrowserAnimationsModule,
    MatDialogModule,
    CabecalhoModule,
    UsuarioModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters: false
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    },
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
