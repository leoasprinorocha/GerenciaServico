export interface Usuario {
  idUsuario?: string;
  nomeCompleto?: string;
  email?: string;
  endereco?:string;
  accessToken?: string;
  descricaoPermissao?: string;
  nomeArea?: string;
  idPermissao?: number;
  numeroArea?: number;
  idArea?: number;
  dataCriacaoUsuario?: Date;
  idStatus?:number;
  descricaoStatus?:string;
  senha?:string;
}
