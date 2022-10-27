export class Conta {
  idConta!: number;
  nomeCliente!: string;
  idCliente!: number | null;
  valorTotal!: number | null;
  valorPlano!: number | null;
  taxaServico!: number | null;
  dataVencimento!: Date | null;
  dataVencimentoString!: string;
  anoMes!: string;
  idSituacaoConta!: number | null;
  situacaoContaString!: string;
}
