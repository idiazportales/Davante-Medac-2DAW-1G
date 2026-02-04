// operaciones.js

/**
 * Suma dos números
 * @param {number} a
 * @param {number} b
 * @returns {number} a + b
 */
export function sumar(a, b) {
  return a + b;
}

/**
 * Resta dos números
 * @param {number} a
 * @param {number} b
 * @returns {number} a - b
 */
export function restar(a, b) {
  return a - b;
}

/**
 * Multiplica dos números
 * @param {number} a
 * @param {number} b
 * @returns {number} a * b
 */
export function multiplicar(a, b) {
  return a * b;
}

/**
 * Divide dos números
 * @param {number} a
 * @param {number} b
 * @returns {number|String} a / b o "Error" si b = 0
 */
export function dividir(a, b) {
  if (b === 0) {
    alert("Error: no se puede dividir entre 0");
    return "Error";
  }
  return a / b;
}
