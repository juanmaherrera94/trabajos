/*
Ejercicio 3
Juanma Herrera
Vamos a gestionar una lista de países haciendo uso de Arrays. Para ello necesitarás crear un
archivo paises.js que incluya las siguientes funciones:
▪ Mostrar el número de elementos del array.
▪ Mostrar todos los elementos del array.
▪ Muestra los elementos del array en sentido inverso.
▪ Muestra los elementos del array ordenados alfabéticamente (sin ordenar el
array original).
▪ Añadir un elemento al principio del array.
▪ Añadir un elemento al final del array.
▪ Borrar un elemento al principio del array (y decir cuál se ha borrado).
▪ Borrar un elemento al final del array (y decir cuál se ha borrado).
▪ Muestra el elemento que se encuentra en una posición que el usuario indica.
▪ Muestra la posición en la que se encuentra un elemento que le indica el
usuario.
▪ Muestra los elementos que se encuentran en un intervalo que el usuario
indica.
Ten en cuenta que el array será una variable global y que se pasará por parámetro en todas
las funciones.
Cuando el usuario cargue la página, se cargará un prompt donde se mostrarán (en el
prompt, no en la página) las opciones:
▪ Mostrar número de países.
▪ Mostrar listado de países (y le preguntará si quiere mostrarlos en el orden
que se encuentran en el array, del revés u ordenados alfabéticamente).
▪ Mostrar un intervalo de países (y le pedirá que introduzca el intervalo en
formato inicio-fin; luego deberás extraer el valor inicio y fin).
▪ Añadir un país (y le preguntará si quiere añadir al principio o al final).
▪ Borrar un país (y le preguntará si quiere borrar al principio o al final).
▪ Consultar un país (y le preguntará si quiere consultar por posición o por
nombre).
▪ Todas las operaciones que se realicen se irán mostrando en la página con su
título.
**/

const paises = ["Argentina", "Brasil", "Espana", "Colombia", "Mexico", "Francia", "Holanda", "Portugal", "Estados Unidos"];

// Funcion para mostrar el numero de elementos
const mostrarNumeroDeElementos = (paises) => {
    document.write("Numero de elementos: " + paises.length);
}

// Metodo para mostrar los paises en orden inverso
const mostrarInverso = (paises) => {
    const inverso = paises.slice().reverse();
    inverso.forEach(element => {
        document.write("Lista de paises en orden inverso: " + element);
    });
}

// Metodo para mostrar los elementos del array ordenado alfabeticamente
const mostrarOrdenado = (paises) => {
    const ordenadoAlf = paises.slice().sort();
    ordenadoAlf.forEach(element => {
        document.write("Paises ordenados alfabeticamente: " + element);
    });
}

// Funcion para anadir un pais al principio del array
const aniadirPrincipio = (paises, pais) => {
    paises.unshift(pais);
    paises.forEach(element => {
        document.write(element);
    });
}

// Funcion para anadir un pais al final del array
const aniadirFinal = (paises, pais) => {
    paises.push(pais);
    paises.forEach(element => {
        document.write(element);
    });
}

// Funcion para borrar el primer pais del array
const borrarAlPrincipio = (paises) => {
    const eliminado = paises.shift();
    eliminado.forEach(element => {
        document.write(element);
    });
}

// Funcion para borrar el ultimo pais del array
const borrarAlFinal = (paises) => {
    const eliminadoFinal = paises.pop();
    eliminadoFinal.forEach(element => {
        document.write(element);
    });
}

// Funcion para mostrar el pais en una posicion especifica
const mostrarEnPos = (paises, pos) => {
    const posicion = paises[pos - 1];
    document.write("Pais en la posicion " + pos + ": " + posicion);
}

// Funcion para mostrar la posicion de un pais en el array
const mostrarPosDelPais = (paises, pais) => {
    const posicion = paises.indexOf(pais);
    document.write("Posicion de " + pais + " en la lista: " + posicion);
}

// Funcion para mostrar un intervalo de paises
const mostrarIntervalo = (paises, inicio, fin) => {
    const intervalo = paises.slice(inicio - 1, fin);
    intervalo.forEach(element => {
        document.write(element);
    });
}