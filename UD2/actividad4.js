const mostrarNumerosImpares = (numero) => {
    for (let i = numero; i >= 1; i--) {
        if (i % 2 !== 0) {
            console.log(i) +"\n" ;
        }
    }
}
mostrarNumerosImpares(10); 