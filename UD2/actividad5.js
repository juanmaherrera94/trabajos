/*
Realiza un programa que lea una cantidad de dinero (múltiplo de 5) y tras ello desglose el cambio en billetes de 500,200,100,50,20,10,5 intentado dar el mínimo número de billetes.
El programa mostrará por consola el número mínimo de billetes de cada cantidad.
**/
const desglosarDinero = (cantidad) => {
    if (cantidad % 5 !== 0) {
        // compruebo si la cantidad no es un multiplo de 5 y devuelve un mensaje de error.
        return "La cantidad debe ser un múltiplo de 5";
    }
     // creo un array con los valores de los billetes disponibles.
    const billetes = [500, 200, 100, 50, 20, 10, 5];
    //creo un array para almacenar la cantidades
    const desglose = [];

    for (let billete of billetes) {
        if (cantidad >= billete) {
            // compruebo si la cantidad actual es mayor o igual al valor del billete.
            // si es asi,calculo cuantos billetes de ese valor caben en la cantidad.
            const cantidadesDeBilletes = Math.floor(cantidad / billete);
             // almaceno la cantidad de billetes de ese valor en desglose
            desglose[billete] = cantidadesDeBilletes;
            //resto la cantidad que corresponde a los billetes del desglose
            cantidad -= cantidadesDeBilletes * billete;
        }
    }

    console.log("Desglose de billetes:");
    for (let billete in desglose) {
        if (desglose[billete] > 0) {
            //recorro desglose y muestro los billetes
            console.log("Billete: " + billete + " Desglosados: " + desglose[billete]);
        }
    }
}
desglosarDinero(710);