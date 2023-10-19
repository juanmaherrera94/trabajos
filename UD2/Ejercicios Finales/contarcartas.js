/*
En el juego de casino Blackjack, un jugador puede determinar si tiene una ventaja sobre la casa en la próxima mano al realizar un seguimiento del número relativo de cartas altas y bajas que quedan en la baraja. Esto se llama Conteo de Cartas.
Tener más cartas altas restantes en el mazo favorece al jugador. A cada carta se le asigna un valor de acuerdo con la siguiente tabla. Cuando la cuenta es positiva, el jugador debe apostar alto. Cuando la cuenta es cero o negativa, el jugador debe apostar bajo.
Conteo Cartas
+1 2, 3, 4, 5, 6
0 7, 8, 9
-1 10, 'J', 'Q', 'K', 'A'
Escribe una función para contar cartas. Recibirá un parámetro llamado card, que puede ser un número o una cadena, e incrementará o decrementará la variable count global según el valor de la carta. La función luego devolverá una cadena con el conteo actual y la cadena de texto, “Bet” si el conteo es positivo, o “Hold” si el conteo es cero o negativo. El conteo actual y la decisión del jugador ( Bet o Hold) deben estar separados por un solo espacio.
Salidas de ejemplo: -3 Hold o 5 Bet
**/
let count=0;//inicializo una variable llamada count a 0
const contarCartas = (card) => {
    switch(card){ //inicio una instruccion switch basada en el valor card
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
            count++;//si card es 2,3,4,5,6 aumento el valor de count
            break;//salimos del bucle
        case "10":
        case "J":
        case "Q":
        case "K":
        case "A":
            count--//si card es 10,j,q,k o a desminuimos el valor count
            break;
    }
    if(count>0){
        return count + "Bet";
    }else {
        return count + "Hold";
    }
}
console.log(contarCartas("10"));