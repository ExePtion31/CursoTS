import { Teclado } from './Teclado';
import { Raton } from './Raton';
import { Computadora } from './Computadora';
import { Monitor } from './Monitor';
import { Orden } from './Orden';

//orden #1
const monitor = new Monitor('Samsung', '23 pulgadas');
const raton = new Raton('USB', 'Logitech');
const teclado = new Teclado('USB', 'Logitech')
const computador1 = new Computadora('Azus 2XL', monitor, raton, teclado);

const orden1 = new Orden();
orden1.agregarComputadora(computador1);
console.log(orden1.mostrarOrden());

//orden #2
const monitor2 = new Monitor('Xiaomi', '44 pulgadas');
const raton2 = new Raton('USB', 'Stringtech');
const teclado2 = new Teclado('USB', 'Stringtech')
const computador2 = new Computadora('HP 343', monitor2, raton2, teclado2);

const orden2 = new Orden();
orden2.agregarComputadora(computador2);
console.log(orden2.mostrarOrden());