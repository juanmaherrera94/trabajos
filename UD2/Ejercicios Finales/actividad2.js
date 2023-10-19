/*
Escribe una función que reciba dos parámetros: número de horas trabajadas y precio por hora. Después llama a la función para probar que funciona.
La función debe calcular el salario neto semanal de un trabajador en función del número de horas trabajadas y la tasa de impuestos de acuerdo a las siguientes reglas:
• Las primeras 35 horas se pagan a tarifa normal.
• Las horas que pasen de 35 se pagan a 1.5 veces la tarifa normal.

Al sueldo bruto se le aplicarán las siguientes tasas de impuestos:
• Los primeros 500 euros son libres de impuestos.
• Los siguientes 400 tienen un 25% de impuestos.
• Los restantes un 45% de impuestos.
Imprime por consola el salario calculado.
**/
const calcularSalarioNeto = (horasTrabajadas, precioPorHora) => {
  // calculo las horas normales (mmaximo 35) y las horas extras (encima de 35)
  const horasNormales = Math.min(35, horasTrabajadas);
  const horasExtras = Math.max(0, horasTrabajadas - 35);

  // calculo el salario bruto sumando el salario de las horas normales y extras
  const salarioBruto = (horasNormales * precioPorHora) + (horasExtras * precioPorHora * 1.5);

  let impuestos = 0;

  // calculo los impuestos basados en el salario bruto
  if (salarioBruto > 500) {
    impuestos += 400 * 0.25;
    impuestos += (salarioBruto - 500);
  } else if (salarioBruto > 100) {
    impuestos += (salarioBruto - 100);
  }

  // calculo el salario neto restando los impuestos del salario bruto
  const salarioNeto = salarioBruto - impuestos;

  // imprimo el salario neto en la consola
  console.log("Salario neto semanal: " + salarioNeto + " euros");
}

calcularSalarioNeto(40, 15);
