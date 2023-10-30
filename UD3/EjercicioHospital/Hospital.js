/**
 * Clase que representa el hospital.
 * @class
 */
class Hospital{
    constructor(nombre,localidad,responsable){
        this.nombre=nombre;
        this.localidad=localidad;
        this.responsable=responsable;
        this.personal = [];
        this.pacientes = [];
        
    }
    agregarPersonal(persona) {
        this.personal.push(persona);
      }
    
      agregarPaciente(paciente) {
        this.pacientes.push(paciente);
      }
      
      setResponsable(responsable) {
        this.responsable = responsable;
      }
      
      mostrarPersonal () {
        return this.personal.map(personal => personal.nombre,this.personal.especialidad);
      }
      mostrarPacientes(){
        return this.pacientes.map(paciente => paciente.nombre);
      }
      borrarPaciente(nombre) {
        this.pacientes = this.pacientes.filter(paciente => paciente.nombre !== nombre);
      }
}
export default Hospital;