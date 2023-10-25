let campo = [
  [0, 0, -1, 0],
  [0, -1, -1, 0],
];
let localizacionMinas = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];
/*Funcion que contará las minas que tiene cada posicion del array bidimensional 
donde hay un -1 habrá una mina, y el resto de valores es el numero 
de minas que tiene alrededor(8 campos a comprobar) */
function contandoMinas(campo) {
  for (let i = 0; i < campo.length; i++) {
    //recorro las filas
    for (let j = 0; j < campo[i].length; j++) {
      if (campo[i][j] == -1) {
        localizacionMinas[i][j] = -1;
      }else{
          // Arriba
          if (i>0 && campo[i-1][j] == -1){
              localizacionMinas[i][j]++;
          }
          // Abajo
          if(i<campo.length-1 && campo[i+1][j] == -1){
              localizacionMinas[i][j]++;
          }
          // Izquierda
          if(j>0 && campo[i][j-1] == -1){
              localizacionMinas[i][j]++;
          }
          // Derecha
          if(j<campo[i].length-1 && campo[i][j+1] == -1){
              localizacionMinas[i][j]++;
          }
          // Arriba izquierda
          if(i>0 && j>0 && campo[i-1][j-1]==-1){
            localizacionMinas[i][j]++;
          }
          // Arriba derecha
          if(i>0 && j<campo[i].length-1 && campo[i-1][j+1]==-1){
            localizacionMinas[i][j]++;
          }
          // Abajo izquierda
          if(i<campo.length-1 && j>0 && campo[i+1][j-1]==-1){
            localizacionMinas[i][j]++;
          }
          // Abajo derecha
          if(i<campo.length-1 && j<campo[i].length-1 && campo[i+1][j+1]==-1){
            localizacionMinas[i][j]++;
          }
      }
    }
  }
  return localizacionMinas;
}
console.log(contandoMinas(campo));