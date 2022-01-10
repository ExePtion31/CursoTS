import { Persona } from './Persona';

let usuario = new Persona('Giovanni', 'Baquero', 21);
console.log(usuario);
console.log(usuario.getNombre());
usuario.setNombre('Pedro');
console.log(usuario.getNombre());