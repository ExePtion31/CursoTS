//Se usa Async cuando vamos a retornar una promesa

async function miFuncionConPromesa():Promise<string>{
    return 'Saludos con promesas Async';
}

miFuncionConPromesa().then(valor => console.log(valor));


//Funcion Async/await
//await solo se puede usar dentro de una funcion declarada con Async
async function funcionConPromesaYAwait(){
    let variable = new Promise<string>(resolve => {
        resolve('Promesa con Await');
    });

    return console.log(await variable);
}

funcionConPromesaYAwait();


//Funcion con await y timeout
async function funcionAwaitTimeout(){
    let miPromesa = new Promise(resolve => {
        setTimeout(() => resolve('Función con Await y Timeout'), 4000)
    });

    return console.log(await miPromesa);
}

funcionAwaitTimeout();