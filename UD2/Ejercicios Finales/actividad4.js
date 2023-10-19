    /*
    Realiza un programa que lea un numero N y muestre por consola todos los impares desde N(inclusive) hasta 1 .
    Cada número se mostrará en una línea distinta.
    N siempre será mayor o igual a 1.
    **/


const mostrarNumerosImpares = (numero) => {
    for (let i = numero; i >= 1; i--) {
        //inicio un bucle for con i comenzando desde numero y descremento hasta 1
        if (i % 2 !== 0) {
            //compruebo si i es impar utilizando el modulo %
            //si el resto no es igual a 0 entonces i es impar
            console.log(i) +"\n" ;
        }
    }
}
mostrarNumerosImpares(10);