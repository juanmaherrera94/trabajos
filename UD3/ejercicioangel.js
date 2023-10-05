const boton = document.getElementById("miBoton");

boton.addEventListener("click", function() {
    boton.style.backgroundColor = "red";
});

const elemento = document.getElementById("raton");

elemento.addEventListener("mouseover", function() {
    elemento.style.color = "yellow";
});

function mostrarMensaje() {
    alert("¡Han pasado 5 segundos!");
}
document.getElementById("mensaje").addEventListener("click", function() {
    setTimeout(mostrarMensaje, 5000);
});