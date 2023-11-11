/*
Juanma Herrera
Ejercicio 5
Realiza un programa que reciba una cadena con el siguiente formato:
“nombre:apellidos:telefono:email:codigopostal”
Tras recibir la cadena, debe desglosar y mostrar la siguiente información:
● Código postal.
● Apellidos.
● Email.
● Suponiendo un formato de email “direccion@servidor” debe mostrar el nombre del servidor asociado.
**/
const cadena="juanma:herrera:656665666:jherex@g.educaand.es:23740";
const trozos=cadena.split(":");
const parte1=trozos[0];
const parte2=trozos[1];
const parte3=trozos[2];
const parte4=trozos[3];
const parte5=parte4.split("@")[1];
const parte6=trozos[4];
console.log(parte1);
console.log(parte2);
console.log(parte3);
console.log(parte4);
console.log(parte5);
console.log(parte6);