import { CadastroNovoUsuario } from './cadastro-novo-usuario';


export interface RegistroCliente {
  email:string,
  password:string,
  confirmPassword:string,
  nome:string,
  telefone:string,
  cpf:string,
  endereco:string,
  byteArrayFoto:string,
  cliente: CadastroNovoUsuario

}
