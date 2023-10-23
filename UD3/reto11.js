function Sandkill(nombre, edad, especialidad) {
    this.nombre = nombre;
    this.edad = edad;
    this.especialidad = especialidad;
    this.mostrar = function () {
        return `Nombre: ${this.nombre}, Edad: ${this.edad}, Especialidad: ${this.especialidad}`;
    };
}

const sandkill1 = new Sandkill("Sandkill1", 29, "Futbol");
const sandkill2 = new Sandkill("Sandkill2", 25, "Diseño");
const sandkill3 = new Sandkill("Sandkill3", 28, "Marketing");

sandkill1.nacionalidad = "Español";
sandkill2.lenguajeFavorito = "Javascript";
delete sandkill3.especialidad;

console.log("Propiedades de sandkill1");
console.log(sandkill1.mostrar());
console.log("Propiedades de sandkill2");
console.log(sandkill2.mostrar());
console.log("Propiedades de sandkill3");
console.log(sandkill3.mostrar());

sandkill1.nombre="Nuevo sand";
sandkill2.lenguajeFavorito="PHP";
sandkill3.edad=39;

console.log("Propiedades de sandkill1");
console.log(sandkill1.mostrar());
console.log("Propiedades de sandkill2");
console.log(sandkill2.mostrar());
console.log("Propiedades de sandkill3");
console.log(sandkill3.mostrar());