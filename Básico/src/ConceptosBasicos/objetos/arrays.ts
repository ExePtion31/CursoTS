let miArreglo:string[] = ["Chevrolet", "Audi", "BMW", "Volvo"];

console.log(miArreglo);

//modificar
miArreglo[0] = "Toyota";
console.log(miArreglo);

for (let index = 0; index < miArreglo.length; index++) {
    console.log(miArreglo[index]);
}

//agregar
miArreglo.push("Ford");
console.log(miArreglo);


//saber si es array
console.log(Array.isArray(miArreglo));