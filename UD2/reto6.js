/*
Realiza una función que reciba un array bidimensional (de longitud variable) un escenario de Buscaminas, donde haya un 0 donde no hay minas y un -1 donde si hay.
Mas información de como funciona el Buscaminas
Para cada casilla que no tenga una mina, diga cuantas minas adyacentes hay en diagonal, horizontal y vertical.
Internamente el programa realizará las acciones con una función definida como
La función devolverá un array bidimensional con el numero de minas adyacentes en cada posición.
**/
const buscaminas = (tablero) => {
    const filas = tablero.length; // Obtener la cantidad de filas del tablero
    const columnas = tablero[0].length; // Obtener la cantidad de columnas del tablero
  
    // Creo una nueva array para almacenar el resultado
    const resultado = [];
  
    // Recorro cada celda del tablero
    for (let i = 0; i < filas; i++) {
      resultado[i] = [];
      for (let j = 0; j < columnas; j++) {
        // Si la celda contiene una mina, copio -1 en el resultado
        if (tablero[i][j] === -1) {
          resultado[i][j] = -1;
        } else {
          let minasDeAlLado = 0; // Inicializar el contador de minas adyacentes a 0
  
          // Compruebo las 8 celdas adyacentes a la celda actual
          for (let x = -1; x <= 1; x++) {
            for (let y = -1; y <= 1; y++) {
              const nuevaFila = i + x;
              const nuevaColumna = j + y;
  
              // Verifico que la celda adyacente se encuentre dentro del limite del tablero
              if (
                nuevaFila >= 0 &&
                nuevaFila < filas &&
                nuevaColumna >= 0 &&
                nuevaColumna < columnas
              ) {
                // Si la celda de al lado contiene una mina, incremento el contador
                if (tablero[nuevaFila][nuevaColumna] === -1) {
                  minasDeAlLado++;
                }
              }
            }
          }
  
          // almaceno el contador en el resultado para la celda actual
          resultado[i][j] = minasDeAlLado;
        }
      }
    }
    return resultado; // devuelvo la matriz con la información de minas adyacentes
  };
  

  const tablero = [
    [0, -1, 0],
    [0, 0, -1],
    [-1, 0, 0]
  ];
  
const resultado = buscaminas(tablero);
console.log(resultado);    