export class Autor 
{
    constructor (nombre, nacionalidad)
    {
        this.nombre         = nombre;
        this.nacionalidad   = nacionalidad;
    }
    //getters and setters
    getNombre()
    {
        return this.nombre;
    }
    getNacionalidad()
    {
        return this.nacionalidad;
    }
} 