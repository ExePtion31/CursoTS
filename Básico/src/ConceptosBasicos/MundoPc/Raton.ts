import { DispositivoEntrada } from './DispositivoEntrada';

export class Raton extends DispositivoEntrada{
    private idRaton:number;
    static contadorRatones:number = 0;

    constructor(tipoEntrada:string, marca:string){
        super(tipoEntrada, marca);
        Raton.contadorRatones++;
        this.idRaton = Raton.contadorRatones++;
    }

    public getIdRaton():number{
        return this.idRaton;
    }

    public toString():string{
        return '\n---RATON---'
        + '\nID Raton: ' + this.idRaton
        + super.toString();
    }
}