import { Persona } from './Persona';

export class Empleado extends Persona{
    private _idEmpleado:number;
    private _sueldo:number;

    constructor(nombre: string, apellido: string, edad: number, sueldo:number){
        super(nombre, apellido, edad);
        this._idEmpleado = super.getIdPersona();
        this._sueldo = sueldo;
    }

    public getIdEmpleado():number{
        return this._idEmpleado;
    }

    public getSueldo():number{
        return this._sueldo;
    }

    public setSueldo(sueldo:number){
        this._sueldo = sueldo;
    }

    public toString():string{
        return super.toString()
        + '\nID Empleado: ' + this._idEmpleado
        + '\nSueldo: ' + this._sueldo;
    }
}