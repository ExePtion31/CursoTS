import { Computadora } from './Computadora';

export class Orden{
    private idOrden:number;
    private computadoras: Computadora[] = [];
    static contadorOrden: number = 0;

    constructor(){
        Orden.contadorOrden++;
        this.idOrden = Orden.contadorOrden;
    }

    public agregarComputadora(computadora:Computadora){
        try {
            this.computadoras.push(computadora);
        } catch (error) {
            console.log('Error al agregar la computadora: ' + error)
        }
    }

    public mostrarOrden(){
        console.log(this.toString());
        for(let computadora of this.computadoras){
            console.log(computadora.toString());
        }
    }

    public toString():string{
        return '\n---ORDEN---'
        + '\nID: ' + this.idOrden ;
    }
}