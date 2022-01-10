const data = [{
    nombre: 'Giovanni',
    edad: 21
},{
    nombre: 'Juan',
    edad: 33
},{
    nombre: 'Perez',
    edad: 22
},]

const promesa = new Promise((resolve, reject) => {
    let info = true;
    if(info){
        resolve(data);
    }else{
        reject('Hubo un error');
    }
})

promesa
.then(valor => console.log(valor))
.catch( error => console.log(error));