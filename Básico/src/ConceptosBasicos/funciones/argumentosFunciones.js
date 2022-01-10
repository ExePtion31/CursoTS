const resultado = sumatoria(5,6,7,8,9);
console.log(resultado);

function sumatoria(){
    let suma = 0;
    for (let i = 0; i < arguments.length; i++) {
        suma += arguments[i];
    }

    return suma;
}