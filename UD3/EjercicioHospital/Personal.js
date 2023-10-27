/**
 * Clase que representa el personal de un hospital.
 * @class
 */
class Personal{
    constructor(nombre,especialidad,salario){
        this.nombre=nombre;
        this.especialidad=especialidad;
        this.salario=salario;
    }
    //modificar nombre
    setNombre(nuevoNombre){
        this.nombre=nuevoNombre;
    }
    //modiciar especialidad
    setEspecialidad(nuevaEspecialiad){
        this.especialidad=nuevaEspecialiad;
    }
    //modificar salario
    setSalario(nuevoSalario){
        this.salario=nuevoSalario;
    }
    toString(){
        return `El nombre del paciente es ${this.nombre} con especialidad ${this.especialidad} y salario ${this.salario}`;
    }
    
}
export default Personal;