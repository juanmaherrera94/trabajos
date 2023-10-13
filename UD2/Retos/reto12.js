
const  multiplosDe3No = () => {
    for (let i=1; i<=100 ;i++){
        if (i % 3 !== 0){
           console.log(i);
        }
       }
}


const mostrarMesesVeranoNo = () =>{

    const meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Septiembre","Octubre","Noviembre","Diciembre"];
    
    for (const mes of meses) {
        console.log(mes);
    }
}

multiplosDe3No();
mostrarMesesVeranoNo();
