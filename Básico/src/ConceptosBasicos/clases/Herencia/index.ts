import { Empleado } from './Empleado';

const empleado = new Empleado('Giovanni', 'Baquero', 'Sistemas');

console.log(empleado.toString());

empleado.setNombre('Juan');

console.log(empleado.toString());