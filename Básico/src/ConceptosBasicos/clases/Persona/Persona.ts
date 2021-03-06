export class Persona{
    private nombre:string;
    private apellido:string;
    private edad:number;
    
    constructor(nombre:string, apellido:string, edad:number){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    public getNombre():string{
        return this.nombre;
    }

    public setNombre(nombre:string){
        this.nombre = nombre;
    }

    public getApellido():string{
        return this.apellido;
    }

    public setApellido(apellido:string){
        this.apellido = apellido;
    }

    public getEdad():number{
        return this.edad;
    }

    public setEdad(edad:number){
        this.edad = edad;
    }
}