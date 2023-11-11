const listaCompra=["Peras","Manzanas","Kiwis","Platanos","Mandarinas"];
let borrar=listaCompra.splice(1,1);
console.log(listaCompra);
let aniadir=listaCompra.splice(3,0,"Naranjas","Sandia");
console.log(listaCompra);
let borrarKiwis=listaCompra.slice(1,1,"Cerezas","Nisperos");
console.log(listaCompra);

const arrayNotas=[4,8,3,10,5];
let ordenarNotas=arrayNotas.sort((nota1,nota2) => nota1-nota2);
console.log(arrayNotas);

const diaDeLaSemana=
["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];
let empiezanPorM=diaDeLaSemana.filter(letraM => letraM[0]==="M");
console.log(empiezanPorM);
let dia=diaDeLaSemana.find(dias=>dias.startsWith("M"));
console.log(dia);
let dia1=diaDeLaSemana.every(dias=> dias.startsWith("S"));
let dia2=diaDeLaSemana.some(dias=> dias.endsWith("S"));
let mayusculas=diaDeLaSemana.map(mayus=>mayus.toUpperCase());
console.log(mayusculas);
const diaDeLaSemana2=diaDeLaSemana;
const eliminarDia=diaDeLaSemana2.pop();
console.log(diaDeLaSemana2);