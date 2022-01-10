import { Orden } from './Orden';
import { Producto } from './producto';

const orden1 = new Orden();
orden1.agregarProducto(new Producto('Aguacate', 2500));
orden1.agregarProducto(new Producto('Arroz', 1500));
orden1.agregarProducto(new Producto('Azucar', 3200));

console.log('Total: ' + orden1.calcularTotal());

console.log(orden1.orden());