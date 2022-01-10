(() => {
    const fullNames = (firstName: string, ...restNamer: string[]):string => {
        return `${firstName} ${restNamer.join(' ')}`;
    }

    const nombres = fullNames('Pedro', 'Roberto', 'Angel', 'Andres');
    console.log(nombres);
})()