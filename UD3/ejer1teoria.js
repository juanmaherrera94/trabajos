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
const producto1 = new Productos("Producto 1","Tecnologia",80,100);
const producto2 = new Productos("Producto 2","Pescado",20,4.95);
const producto3 = new Productos("Producto A","Dulces",6,2.95);

console.log(producto1.getInfo());
console.log(producto2.getInfo());
console.log(producto3.getInfo());