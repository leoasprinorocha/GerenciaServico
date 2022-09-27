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
    UteisModule,
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
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
