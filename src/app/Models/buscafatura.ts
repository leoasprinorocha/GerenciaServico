export class BuscaFatura{
  data!: string;
  tipoBusca!: string;
  idArea!: Number;

  constructor(data: string, tipoBusca: string, idArea: number){
    this.data = data;
    this.tipoBusca = tipoBusca;
    this.idArea = idArea;

  }
}
