function calcularAreaTriangulo(base,altura){
    return base*altura/2;
}

function calcularPerimetroTrianguloEquilatero(lado1){
    return 3*lado1;

}

function calcularPerimetroTrianguloIsosceles(lado1,lado2,base){
    return lado1+lado2+base;
}

function calcularPerimetroTrianguloEscaleno(lado1, lado2, lado3) {
    return lado1 + lado2 + lado3;
  }

  function calcularAreaCuadrado(lado1) {
    return lado1 * lado1;
  }

  function calcularPerimetroCuadrado(lado1) {
    return 4 * lado1;
  }
  
  function calcularAreaRectangulo(base, altura) {
    return base * altura;
  }
  
  function calcularPerimetroRectangulo(base, altura) {
    return 2 * (base + altura);
  }

  function calcularAreaCirculo(radio) {
    return Math.PI * radio * radio;
  }
  
