export class DispositivoEntrada {
  private tipoEntrada: string;
  private marca: string;

  constructor(tipoEntrada: string, marca: string) {
    this.tipoEntrada = tipoEntrada;
    this.marca = marca;
  }

  public getTipoEntrada():string{
      return this.tipoEntrada;
  }

  public setTipoEntrada(tipoEntrada:string){
      this.tipoEntrada = tipoEntrada;
  }

  public getMarca():string{
      return this.marca;
  }

  public setMarca(marca:string){
      this.marca = marca;
  }

  public toString():string{
      return '\nTipo de entrada: ' + this.tipoEntrada
      + '\nMarca: ' + this.marca;
  }
}
