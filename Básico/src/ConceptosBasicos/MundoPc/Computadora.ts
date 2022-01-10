import { Monitor } from './Monitor';
import { Raton } from './Raton';
import { Teclado } from './Teclado';

export class Computadora{
    private idComputadora:number;
    private nombre:string;
    private monitor:Monitor;
    private raton:Raton;
    private teclado:Teclado;
    static contadorComputadoras:number = 0;

    constructor(nombre:string, monitor:Monitor, raton:Raton, teclado:Teclado){
        Computadora.contadorComputadoras++;
        this.idComputadora = Computadora.contadorComputadoras;
        this.nombre = nombre;
        this.monitor = monitor;
        this.raton = raton;
        this.teclado = teclado;
    }

    public getIdComputadora(): number {
        return this.idComputadora;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getMonitor(): Monitor {
        return this.monitor;
    }

    public setMonitor(monitor: Monitor): void {
        this.monitor = monitor;
    }

    public getRaton(): Raton {
        return this.raton;
    }

    public setRaton(raton: Raton): void {
        this.raton = raton;
    }

    public getTeclado(): Teclado {
        return this.teclado;
    }

    public setTeclado(teclado: Teclado): void {
        this.teclado = teclado;
    }

    public toString():string{
        return '\n---COMPUTADORA---'
        + '\nID: ' + this.idComputadora
        + '\nNombre ' + this.nombre
        + this.monitor.toString()
        + this.raton.toString()
        + this.teclado.toString()
    }
}