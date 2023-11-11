import { Autor } from "./autor";
import { Libro } from "./libro";

class Libreria{
    constructor(){
        this.array_libros=[];
        this.ganacias=0;
    }

    //Metodos------------------------------------------------------
    //este metodo agrega un nuevo libro al array de libros.
    //genera un isbn unico aleatorio y comprueba si existe en el array, si es repetido
    //genera uno nuevo y agrega el libro
    agregarLibro(Libro){
        let id=0;
        const min = 1000000000000;
        const max = 9999999999999;
        let siEsRepetido=true;
    
        
        do {
           
            let isbn=Math.floor(Math.random() * (max - min) + min);
            //comprobar si el valor isbn existe en el array
            for (let i of this.array_libros) {
                if (i.isbn==isbn) {
                    siEsRepetido=true;
                }else{
                    const libro1 = new Libro(id,isbn,"El amor","Perico de los palotes",20,"Romance",5);
                    array_libros.push(libro1);
                    //aqui incrementamos el valor de la ida para el siguiente libro
                    id++;
                    let siEsRepetido=false;
                }
            }
        } while (siEsRepetido);
    }

    //eliminar libro segun su id utilizando el metdo findIndex para encontrar la posicion
    // y splice para eliminarlo.

    eliminar(libroELiminar){
        const i =this.array_libros.findIndex(pos=> pos.id === libroELiminar);
        if(i !==-1){
            this.array_libros.splice(pos,1);
        }
    }
    //buscar libro por id y devuelve un array con los resultados utilizando el metodo filter
    buscarPorId(id){

        return this.array_libros.filter(pos=>pos.id===id);

    }
    //buscar libro por titulo y devuelve un array con los resultados utilizando el metodo filter
    buscarPorTitulo(titulo){
        return this.array_libros.filter(pos=>pos.titulo===titulo);
      
    }
    //filtrar por autor  y devuelve un array con los resultados utilizando el metodo filter
    filtrarPorAutor(autor){
        return this.array_libros.filter(pos => pos.autor === autor);
  
    }
    //filtrar por genero  y devuelve un array con los resultados utilizando el metodo filter
    filtrarPorGenero(genero){
        return this.array_libros.filter(pos=>pos.genero===genero);
     
    }
    //comprar libros.
    //Verifica primero si el libro existe y si hay stock y realiza la compra actualizando las ganancias y restando el stock
    comprarLibro(libroComprar){
        
        const libro=this.array_libros.find(pos=>pos.id === libroComprar);
        if(libro){
            if(libro.tieneStock()){
                this.ganacias+=libro.getPrecio();
                libro.setstock(libro.getStock()-1);
            }else{
                console.log("No hay stock");
            }
        }
     
    }
    //obtener ganacias totales acumuladas, reinicia el contador y devuelve el total
    obtenerGanancias(){
        const gananciasTotal=this.ganacias;
        this.ganacias=0;
        return gananciasTotal;
    }
}