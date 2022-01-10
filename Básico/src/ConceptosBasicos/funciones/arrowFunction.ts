//funcion compuesta por una sola linea
const sumaDatos = (a,b) => a + b;
console.log(sumaDatos(1,3));


//Funcion compuesta por varias lineas
const validarEdad = (edad) => {
    if(edad >= 18){
        console.log('Es mayor de edad');
    } else {
        console.log('Es menor de edad');
    }
}

console.log(validarEdad(18));