export class Libro 
{
    constructor (id, titulo, autor, precio, genero, stock)
    {
        this.id     = id;
        this.isbn   = isbn;
        this.titulo = titulo;
        this.autor  = autor;
        this.precio = precio;
        this.genero = genero;
        this.stock  = stock;
    }

    //metodo para saber si hay stock
    tieneStock (stock)
    {
        if(this.stock > 0)
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    //getters----------------------------------------------
    getIsbn()
    {
        return this.isbn;
    }
    getTitulo()
    {
        return this.titulo;
    }
    getAutor()
    {
        return this.autor;
    }
    getPrecio()
    {
        return this.precio;
    }
    getGenero()
    {
        return this.genero;
    }
    getStock()
    {
        return this.stock;
    }

    //setters----------------------------------------------
    setIsbn(isbn)
    {
        this.isbn = isbn;
    }
    setTitulo(titulo)
    {
        this.titulo = titulo;
    }
    setAutor(autor)
    {
        this.autor = autor;
    }
    setPrecio(precio)
    {
        this.precio = precio;
    }
    setGenero(genero)
    {
        this.genero = genero;
    }
    setStock(stock)
    {
        this.stock = stock;
    }
} 