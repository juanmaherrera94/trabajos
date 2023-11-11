/*
@author Juanma Herrera

Ejercicio 4

Realiza un programa que calcule cuántos 
números son a la vez primos y palíndromos desde
el 1 hasta 100000. Debe guardar todos ellos en un array 
y al finalizar el proceso imprimir
dicho array.
**/
const array_primos = [];
const array_Palindromos = [];
let esPrimo = true;
//comprobar si un numero es primo
for (let numero = 1; numero <= 100000; numero++) {
    let esPrimo = true;
    if (numero <= 1) {//Compruebo si el numero es menor o igual a 1. Si es asi, no es primo.
        esPrimo = false;
    } else if (numero <= 3) {
        esPrimo = true;

    } else if (numero % 2 === 0 || numero % 3 === 0) {//Compruebo si el numero es divisible por 2 o 3. Si lo es, no es primo.
        esPrimo = false;
    }
    if(esPrimo){
        array_primos.push(numero);
    }
}
//compruebo si un numero es palindromo
for (let num2 = 1; num2 <= 100000; num2++) {
    //comprobar si un numero es palindromo
    let numeroCadena = num2.toString();
    //invierto la cadena 
    let cadenaInvertida = numeroCadena.split("").reverse().join("");
    //comparo la cadena con la invertida
    let esPalindromo = numeroCadena === cadenaInvertida;

    if (esPalindromo) {
        array_Palindromos.push(num2);
    }
}
const numerosPrimosyPalindromos = array_primos.concat(array_Palindromos);
console.log("Numeros primos y palindromos:" + numerosPrimosyPalindromos);