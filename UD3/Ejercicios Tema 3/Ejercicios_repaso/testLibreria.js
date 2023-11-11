// Importa las clases y la librería
import { Autor } from "./autor";
import { Libro } from "./libro";
import { Libreria } from "./Libreria";

// Crea instancias de autor y libro para usar en las pruebas
const autor1 = new Autor("Perico de los palotes", "NacionalidadX");
const libro1 = new Libro(1, "El amor", autor1, 20, "Romance", 5);

// Crea una instancia de la librería
const libreria = new Libreria();

// Prueba agregarLibro
libreria.agregarLibro(libro1);

// Prueba buscarPorId
console.log("Buscar por ID (debería imprimir el libro añadido):");
console.log(libreria.buscarPorId(1));

// Prueba buscarPorTitulo
console.log("\nBuscar por Título (debería imprimir el libro añadido):");
console.log(libreria.buscarPorTitulo("El amor"));

// Prueba filtrarPorAutor
console.log("\nFiltrar por Autor (debería imprimir el libro añadido):");
console.log(libreria.filtrarPorAutor("Perico de los palotes"));

// Prueba filtrarPorGenero
console.log("\nFiltrar por Género (debería imprimir el libro añadido):");
console.log(libreria.filtrarPorGenero("Romance"));

// Prueba comprarLibro
console.log("\nComprar Libro (debería aumentar las ganancias y reducir el stock):");
libreria.comprarLibro(1);

// Prueba obtenerGanancias
console.log("\nObtener Ganancias (debería imprimir las ganancias acumuladas):");
console.log(libreria.obtenerGanancias());

// Prueba eliminar
console.log("\nEliminar Libro (debería eliminar el libro añadido):");
libreria.eliminar(1);

// Verificar que el libro se eliminó correctamente
console.log("\nVerificar que el libro se eliminó correctamente (debería imprimir un array vacío):");
console.log(libreria.buscarPorId(1));
