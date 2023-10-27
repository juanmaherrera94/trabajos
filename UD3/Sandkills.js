class Sandkills {
    constructor(nombre, edad, especialidad, companiero) {
        this.nombre = nombre;
        this.edad = edad;
        this.especialidad = especialidad;
        this.companiero = companiero;
    }
    mostrar() {

        return "Nombre: " + this.getNombre() + ", Edad: " + this.getEdad() + ", Especialidad: " + this.getEspecialidad() + ", Compañero: " + this.getNombreCompaniero();
    }

    getNombre() {

        return this.nombre;
    }
    getEdad() {

        return this.edad;
        
    }
    getEspecialidad() {
        switch (this.especialidad) {
            case 1:
                return "Sistemas";
                break;
            case 2:
                return "Web";
                break;
            case 3:
                return "Multiplaforma"
            default:
                break;
        }
    }
    getNombreCompaniero() {
        if (this.companiero) {
            return this.companiero.getNombre();
        } else {
            return "No tiene compañero";
        }
    }
    getCompaneiro(){
        this.companiero;
    }
    setNombre(nombre){
        this.nombre=nombre;
    }
    setEdad(edad){
        this.edad=edad;
    }
    setEspecialidad(especialidad){
        this.especialidad=especialidad;
    }
    setEspecialidadNombre(especialidadNombre){
        switch (especialidadNombre) {
            case "Sistemas":
                this.especialidad=1;
                break;
            case "Web":
                this.especialidad=2;
                break;
            case "Multiplataforma":
                this.especialidad=3;
                break;
                default:
                    "Error no hay una especialidad valida"
        }
    }
    setCompaniero(companiero){
        this.companiero=companiero;
    }
}

module.exports=Sandkills;