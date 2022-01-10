export class Producto{
    private idProducto: number;
    private nombre:string;
    private precio:number;
    static contadorProductos:number = 0;

    constructor(nombre:string, precio:number){
        Producto.contadorProductos++;
        this.idProducto = Producto.contadorProductos;
        this.nombre = nombre;
        this.precio = precio;
    }

    public getIdProducto():number{
        return this.idProducto;
    }

    public getNombre():string{
        return this.nombre;
    }

    public setNombre(nombre:string){
        this.nombre = nombre;
    }

    public getPrecio():number{
        return this.precio;
    }

    public setPrecio(precio:number){
        this.precio = precio;
    }

    public toString():string{
        return '\n--PRODUCTO--'
        + '\nID: ' + this.idProducto
        + '\nNombre: ' + this.nombre
        + '\nPrecio: ' + this.precio;
    }
}