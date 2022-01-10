export class Monitor{
    private idMonitor:number;
    private marca:string;
    private tamano:string;
    static contadorMonitores:number = 0;

    constructor(marca:string, tamano:string){
        Monitor.contadorMonitores++;
        this.idMonitor = Monitor.contadorMonitores;
        this.marca = marca;
        this.tamano = tamano;
    }

    public getIdMonitor():number{
        return this.idMonitor;
    }

    public getMarca():string{
        return this.marca;
    }

    public setMarca(marca:string){
        this.marca = marca;
    }

    public getTamano():string{
        return this.tamano;
    }

    public setTamano(tamano:string){
        this.tamano = tamano;
    }

    public toString():string{
        return '\n---MONITOR---'
        + '\nID: ' + this.idMonitor
        + '\nMarca: ' + this.marca
        + '\nTamaño: ' + this.tamano;
    }
}