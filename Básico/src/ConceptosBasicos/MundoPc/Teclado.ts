import { DispositivoEntrada } from './DispositivoEntrada';

export class Teclado extends DispositivoEntrada{
    private idTeclado:number;
    static contadorRatones:number = 0;

    constructor(tipoEntrada:string, marca:string){
        super(tipoEntrada, marca);
        Teclado.contadorRatones++;
        this.idTeclado = Teclado.contadorRatones++;
    }

    public getIdRaton():number{
        return this.idTeclado;
    }

    public toString():string{
        return '\n---TECLADO---'
        + '\nID Teclado: ' + this.idTeclado
        + super.toString();
    }
}