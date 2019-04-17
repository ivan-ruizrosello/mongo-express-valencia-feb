const creaPromesa = () => {
    return new Promise((resolve, reject) => {
        resolve('Hola')
    }).then(resultado => {
        console.log(resultado);
    
        return resultado + '@'
    })
}

creaPromesa().then(resultado => {
    console.log(resultado);

    return resultado + '!'
}).then(resultado => {
    console.log(resultado);

    return resultado + '!'
}).then(resultado => {
    console.log(resultado);

    return resultado + '!'
}).then(resultado => {
    console.log(resultado);

    return resultado + '!'
})