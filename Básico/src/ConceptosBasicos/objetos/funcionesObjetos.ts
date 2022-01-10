let personas = [{
    nombre: "Giovanni",
    apellido: "Baquero",
    edad: 21
},{
    nombre: "Pedro",
    apellido: "Escobar",
    edad: 30
},{
    nombre: "Juan",
    apellido: "Gonzales",
    edad: 22
}];

for (let index = 0; index < personas.length; index++) {
    //personas[index].nombre = "Giovanni";
    console.log(personas[index]);
    
}

//Funciones dentro de objetos
let datosPersona = {
    nombre: 'Giovanni',
    apellido: 'Baquero',
    edad: 21,
    get nombreCompleto():string{
        return this.nombre + ' ' + this.apellido
    } 
}

console.log(datosPersona.nombreCompleto);