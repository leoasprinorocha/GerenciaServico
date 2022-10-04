import { Endereco } from './endereco';
export interface HttpResponse {
  statusCode? : number,
  message? : string,
  enderecos: Endereco[]

}
