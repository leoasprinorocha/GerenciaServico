export interface RegistroUsuario {
  email: string,
  nomeCompleto: string,
  endereco?:string,
  idArea:number,
  idPermissao:number,
  password:string,
  confirmPassword:string

}
