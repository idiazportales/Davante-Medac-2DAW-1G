// main.js
import { sumar, restar, multiplicar, dividir } from "./operaciones.js";

// Obtener elementos del HTML
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");
const resultado = document.getElementById("resultado");

const btnSumar = document.getElementById("sumar");
const btnRestar = document.getElementById("restar");
const btnMultiplicar = document.getElementById("multiplicar");
const btnDividir = document.getElementById("dividir");

// Función para actualizar el resultado
function mostrarResultado(valor) {
  resultado.textContent = valor;
}

// Conectar botones con funciones
btnSumar.addEventListener("click", () => {
  const res = sumar(Number(input1.value), Number(input2.value));
  mostrarResultado(res);
});

btnRestar.addEventListener("click", () => {
  const res = restar(Number(input1.value), Number(input2.value));
  mostrarResultado(res);
});

btnMultiplicar.addEventListener("click", () => {
  const res = multiplicar(Number(input1.value), Number(input2.value));
  mostrarResultado(res);
});

btnDividir.addEventListener("click", () => {
  const res = dividir(Number(input1.value), Number(input2.value));
  mostrarResultado(res);
});