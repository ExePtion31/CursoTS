let persona1 = {
    nombre: 'Giovanni',
    apellido: 'Baquero',
    nombreCompleto: function():string{
        return this.nombre + ' ' + this.apellido;
    },
    carrera: function(titulo:string, telefono:number):string{
        return 'Nombre: ' + this.nombre
        + '\nApellido: ' + this.apellido 
        + '\nCarrera: ' + titulo + ' \nTeléfono: ' + telefono
    }
}

let persona2 = {
    nombre: 'Andres',
    apellido: 'Gonzáles',
}

//call
console.log(persona1.nombreCompleto.call(persona2));
console.log(persona1.carrera.call(persona2, "Software", 3102202183));
