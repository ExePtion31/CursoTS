import { Persona } from './Persona'

export class Empleado extends Persona{
    private _departamento: string;

    constructor(nombre:string, apellido:string, departamento:string){
        super(nombre, apellido);
        this._departamento = departamento;
    }

    public getDepartamento():string{
        return this._departamento;
    }

    public setDepartamento(departamento:string){
        this._departamento = departamento;
    }

    public toString():string{
        return super.toString()
        + '\nDepartamento: ' + this._departamento;
    }
}