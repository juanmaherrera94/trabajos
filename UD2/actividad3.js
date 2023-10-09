const n=0;

// Validar que N sea mayor o igual a 2
if (n < 2) {
  console.log("El número debe ser mayor o igual a 2.");
} else {
  // Iterar desde 2 hasta N (inclusive) en incrementos de 2
  for (let i = 2; i <= n; i += 2) {
    console.log(i);
  }
}