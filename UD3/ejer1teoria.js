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

    getInfo(){
        const total=this.total();
        return `${this.name} (${this.category}): ${this.units} unidades x ${this.price} € = ${total} €`;
        
    }
   
}
/*const producto1 = new Productos("Producto 1","Tecnologia",80,100);
const producto2 = new Productos("Producto 2","Pescado",20,4.95);
const producto3 = new Productos("Producto A","Dulces",6,2.95);

 

console.log(producto1.getInfo());
console.log(producto2.getInfo());
console.log(producto3.getInfo());
**/
class Televisores extends Productos{
    constructor(name,category,units,price,tamanio){
        super(name,category,units,price);
        this.tamanio=tamanio;
    }
    getInfo(){
        const total=this.total();
        return `${this.name} (${this.category}), ${this.tamanio} pulgadas: ${this.units} unidades x ${this.price} € = ${total} €`;
        
    }
}
const producto1=new Televisores("Televisor Lg","Televisores",5,600,65);
const producto2=new Televisores("Televisor Xiaomi","Televisores",2,1000,55);
console.log(producto1.getInfo());
console.log(producto2.getInfo());