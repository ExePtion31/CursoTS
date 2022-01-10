import { Cliente } from './Cliente';
import { Empleado } from './Empleado';

const empleado1 = new Empleado('Giovanni', 'Baquero', 21, 2930000);
console.log(empleado1.toString());

const cliente1 = new Cliente('Andres', 'Granizo', 21, 2930000);
console.log(cliente1.toString());

const empleado2 = new Empleado('Juan', 'Gonzales', 30, 2120000);
console.log(empleado2.toString());