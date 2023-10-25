class Productos{
    constructor(name,category,units,price){
        this.name=name;
        this.category=category;
        this.units=units;
        this.price=price;
    }
    total(){
        return this.units*this.price;
    }

    toString(){
        const total=this.total();
        return `${this.name} (${this.category}): ${this.units} unidades x ${this.price} € = ${total} €`;
        
    }
   
}
/*
const producto1 = new Productos("Producto 1","Tecnologia",80,100);
const producto2 = new Productos("Producto 2","Pescado",20,4.95);
const producto3 = new Productos("Producto A","Dulces",6,2.95);

console.log(producto1.toString());
console.log(producto2.toString());
console.log(producto3.toString());
**/

class Televisores extends Productos{
    constructor(name,category,units,price,tamanio){
        super(name,category,units,price);
        this.tamanio=tamanio;
    }
    toString(){
        const total=this.total();
        return `${this.name} (${this.category}), ${this.tamanio} pulgadas: ${this.units} unidades x ${this.price} € = ${total} €`;
        
    }
}
const producto1=new Televisores("Televisor Lg","Televisores",5,600,65);
const producto2=new Televisores("Televisor Xiaomi","Televisores",2,1000,55);
console.log(producto1.toString());
console.log(producto2.toString());

const productosArr=
[new Productos("PS5", "Electronicos", 5, 100),
new Productos("Mando", "Electronicos", 10, 25),
new Productos("Cable de red", "Electronicos", 20, 2.5),
new Productos("Tablet", "Electronicos", 3, 120),
new Productos("Repetidor", "Electronicos", 8, 30)];

function prodsSortByName(productos){
    return productos.sort();//ordena alfabeticamente;
 }
console.log(prodsSortByName(productosArr));


function prodsWithLowUnits(productos,numero) {
    return productos.filter(producto => producto.units < numero);
  }
  console.log(prodsWithLowUnits(productosArr,6));

function prodsList(productos) {
    let resultado = "Listado de productos:\n";
    for (const producto of productos) {
      resultado += `- ${producto.name} (${producto.category}): ${producto.units} uds x ${producto.price} € = ${producto.total()} €\n`;
    }
  
    return resultado;
  }
  console.log(prodsList(productosArr));