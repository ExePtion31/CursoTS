import { Producto } from './Producto';

export class Orden{
    private idOrden:number;
    private productos:Producto[] = [];
    private contadorProductosAgregados:number = 0;
    static contadorOrdenes:number = 0;

    constructor(){
        Orden.contadorOrdenes++;
        this.idOrden = Orden.contadorOrdenes;
    }

    public orden(){
        for(let producto of this.productos){
            console.log(producto.toString());
        }
    }

    public agregarProducto(producto:Producto){
        try {
            this.productos.push(producto);
            this.contadorProductosAgregados++;
        } catch (error) {
            console.log('Error al agregar el producto: ' + error)
        }
    }

    public calcularTotal():number{
        let totalVenta = 0;
        for(let producto of this.productos){
            totalVenta += producto.getPrecio();
        }
        return totalVenta;
    }
}