function dividir(a, b) {
  if (b === 0) {
    return "Error: No se puede dividir por cero";
  }
  
  return a / b;
}

console.log(dividir(10, 2)); 
console.log(dividir(7, 0));  