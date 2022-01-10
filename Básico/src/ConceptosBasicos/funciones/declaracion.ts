//declarando funcion
function miFuncion(a, b, c):number{
    console.log(arguments.length);//cantidad de argumentos
    return (a + b)- c;
}  

let suma = miFuncion(10, 5, 5);
console.log(suma);

let miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto);

//Declaración tipo expresión
let sumar = function(a,b):number{return a + b};
console.log(sumar(1, 2));

//self invoking
(function(nombre){
    console.log('Bienvenido: ' + nombre);
})('Giovanni');