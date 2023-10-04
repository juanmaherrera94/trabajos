const areaTriangulo = (base,altura)=>{
  return base*altura/2;
}

const perimetroTrianguloEquilatero = (lado)=>{
  return lado*3;
}

const perimetroTrianguloIsoceles = (lado, base)=>{
  return lado*2+base;
}

const perimetroTrianguloEscaleno = (lado1, lado2, lado3)=>{
  return lado1+lado2+lado3;
}

const areaCuadrado = (lado)=>{
  return lado**2;
}

const perimetroCuadrado = (lado)=>{
  return lado*4;
}

const areaRectangulo = (lado1,lado2)=>{
  return lado1*lado2;
}

const perimetroRectangulo = (lado1,lado2)=>{
  return 2 * (lado1+lado2);
}

const areaCirculo = (radio)=>{
  return Math.PI * radio**2;
}

const longitudCircunferencia = (radio)=>{
  return 2*Math.PI*radio;
}

  const perimetroTriangulo = function(lado1, lado2, lado3) {
    if (arguments.length === 1) {
        console.log(lado1);
        return perimetroTrianguloEquilatero(lado1);
    } else if(arguments.length === 2) {
        console.log(lado1, lado2);
        return perimetroTrianguloIsoceles(lado1, lado2);
    } else if(arguments.length === 3) {
        console.log(lado1, lado2, lado3);
        return perimetroTrianguloEscaleno(lado1, lado2, lado3);
    }
}

const perimetroParalelogramo = function(lado1, lado2){
    if (arguments.length === 1) {
        return perimetroCuadrado(lado1);
    } else {
        return perimetroRectangulo(lado1, lado2);
    }
}