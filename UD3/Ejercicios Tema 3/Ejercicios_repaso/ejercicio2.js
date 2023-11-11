/*
Ejercicio 2
Crea un programa que pida muestre el número de días que quedan desde hoy hasta el fin
de curso (por ejemplo, el 24 de junio).
▪ Recuerda que los meses empiezan desde el número 0
**/
const fechaHoy=new Date;
const finalDeCurso=new Date(fechaHoy.getFullYear(),5,24);
const diferencia=fechaHoy-finalDeCurso;
const diasQueQuedan=Math.floor(diferencia/(1000 * 60 * 60 * 24));
console.log("Quedan hasta el final del curso:"+ diasQueQuedan + " dias");