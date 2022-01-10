export class Persona {
  private _idPersona: number;
  private _nombre: string;
  private _apellido: string;
  private _edad: number;
  static contadorPersonas: number = 0;

  constructor(nombre: string, apellido: string, edad: number) {
    Persona.contadorPersonas++;
    this._idPersona = Persona.contadorPersonas;
    this._nombre = nombre;
    this._apellido = apellido;
    this._edad = edad;
  }

  public getIdPersona(): number {
    return this._idPersona;
  }

  public getNombre(): string {
    return this._nombre;
  }

  public setNombre(nombre: string) {
    this._nombre = nombre;
  }

  public getApellido(): string {
    return this._apellido;
  }

  public setApellido(apellido: string) {
    this._apellido = apellido;
  }

  public getEdad(): number {
    return this._edad;
  }

  public setEdad(edad: number) {
    this._edad = edad;
  }

  public toString():string{
    return '|---Persona---|'
    + '\nID: ' + this._idPersona
    + '\nNombre: ' + this._nombre
    + '\nApellido: ' + this._apellido
    + '\nEdad: ' + this._edad;
  }
}
