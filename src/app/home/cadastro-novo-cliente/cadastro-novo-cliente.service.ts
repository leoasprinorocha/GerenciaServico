import { HomeModule } from './../home.module';
import { CustomResponse } from './../custom-response';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegistroCliente } from './registro-cliente';
import { SerializationHelper } from 'src/app/uteis/serialization-helper';

@Injectable({
  providedIn: 'root',
})
export class CadastroNovoClienteService {
  constructor(private httpClient: HttpClient) {}

  cadastraNovoUsuario(novoUsuario: RegistroCliente): CustomResponse {
    let jsonResponse = this.httpClient
      .post('http://192.168.0.2:46000/authentication/register', novoUsuario)
      .subscribe((resp) => JSON.stringify(resp))
      .toString();

    return SerializationHelper.toInstance(jsonResponse);
  }
}
