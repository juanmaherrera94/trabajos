const desglosarDinero = (cantidad) => {
    if (cantidad % 5 !== 0) {
        return "La cantidad debe ser un múltiplo de 5";
    }

    const billetes = [500, 200, 100, 50, 20, 10, 5];
    const desglose = {};

    for (let billete of billetes) {
        if (cantidad >= billete) {
            const cantidadesDeBilletes = Math.floor(cantidad / billete);
            desglose[billete] = cantidadesDeBilletes;
            cantidad -= cantidadesDeBilletes * billete;
        }
    }

    console.log("Desglose de billetes:");
    for (let billete in desglose) {
        if (desglose[billete] > 0) {
            console.log("Billete: " + billete + " Desglosados: " + desglose[billete]);
        }
    }
}
desglosarDinero(710);