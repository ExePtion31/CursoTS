import { Persona } from './Persona';

export class Cliente extends Persona{
    private _idCliente:number;
    private _fechaRegistro:Date;

    constructor(nombre: string, apellido: string, edad: number, sueldo:number){
        super(nombre, apellido, edad);
        this._idCliente = super.getIdPersona();
        this._fechaRegistro = new Date();
    }

    public getIdCliente():number{
        return this._idCliente;
    }

    public getFechaRegistro():Date{
        return this._fechaRegistro;
    }

    public setFechaRegistro(fecha:Date){
        this._fechaRegistro = fecha;
    }

    public toString():string{
        return super.toString()
        + '\nID Cliente: ' + this._idCliente
        + '\nFecha de Registro: ' + this._fechaRegistro;
    }
}