const calcularSalarioNeto=(horasTrabajadas, precioPorHora) => {
    const horasNormales = Math.min(35, horasTrabajadas);
    const horasExtras = Math.max(0, horasTrabajadas - 35);
    
    const salarioBruto = (horasNormales * precioPorHora) + (horasExtras * precioPorHora * 1.5);
    
    let impuestos = 0;
    if (salarioBruto > 500) {
      impuestos += 400 * 0.25;
      impuestos += (salarioBruto - 500)
    } else if (salarioBruto > 100) {
      impuestos += (salarioBruto - 100) 
    }
    
    const salarioNeto = salarioBruto - impuestos;
    
    console.log("Salario neto semanal: " + salarioNeto + " euros");
  }

  calcularSalarioNeto(40, 15);
