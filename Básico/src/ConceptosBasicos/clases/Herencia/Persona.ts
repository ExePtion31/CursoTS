export class Persona{
    private _nombre: string;
    private _apellido: string;

    constructor(nombre:string, apellido:string){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    public getNombre():string{
        return this._nombre;
    }

    public setNombre(nombre:string){
        this._nombre = nombre;
    }

    public getApellido():string{
        return this._apellido;
    }

    public setApellido(apellido:string){
        this._apellido = apellido;
    }   

    public toString():string{
        return '|---Persona---|'
        + '\nNombre: ' + this._nombre
        + '\nApellido: ' + this._apellido;
    }
}