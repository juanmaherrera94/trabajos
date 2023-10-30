/**
 * Clase que representa el paciente de un hospital.
 * @class
 */
class Paciente{
    constructor(nombre,apellidos,enfermedad,numeroCita){
        this.nombre=nombre;
        this.apellidos=apellidos;
        this.enfermadad=enfermedad;
        this.numeroCita=numeroCita;
    }
    setNombre(nuevoNombre){
        this.nombre=nuevoNombre;
    }
    setApellidos(nuevoApellido){
        this.apellidos=nuevoApellido;
    }
    setEnfermedad(nuevaEnfermedad){
        this.enfermedad=nuevaEnfermedad
    }
    toString(){
        return `El nombre del paciente es ${this.nombre} con apellidos ${this.apellidos} enfermedad: ${this.enfermadad} y con nuevo de cita ${this.numeroCita}`;
    }
}