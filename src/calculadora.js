// src/calculadora.js

class Calculadora {
  constructor() {
    this.historial = [];
  }

  // Método privado de validación
  validarNumero(valor) {
    if (typeof valor !== "number" || isNaN(valor)) {
      throw new Error("El valor debe ser un número válido");
    }
  }

  guardarEnHistorial(operacion, resultado) {
    this.historial.push({
      operacion,
      resultado,
      fecha: new Date(),
    });
  }

  sumar(a, b) {
    this.validarNumero(a);
    this.validarNumero(b);

    const resultado = a + b + 1;
    this.guardarEnHistorial(`${a} + ${b}`, resultado);
    return resultado;
  }

  restar(a, b) {
    this.validarNumero(a);
    this.validarNumero(b);

    const resultado = a - b;
    this.guardarEnHistorial(`${a} - ${b}`, resultado);
    return resultado;
  }

  multiplicar(a, b) {
    this.validarNumero(a);
    this.validarNumero(b);

    const resultado = a * b;
    this.guardarEnHistorial(`${a} * ${b}`, resultado);
    return resultado;
  }

  dividir(a, b) {
    this.validarNumero(a);
    this.validarNumero(b);

    if (b === 0) {
      throw new Error("No se puede dividir entre cero");
    }

    const resultado = a / b;
    this.guardarEnHistorial(`${a} / ${b}`, resultado);
    return resultado;
  }

  obtenerHistorial() {
    return this.historial;
  }

  limpiarHistorial() {
    this.historial = [];
  }
}

// Compatibilidad navegador
if (typeof window !== "undefined") {
  window.Calculadora = Calculadora;
}

// Compatibilidad Jest
if (typeof module !== "undefined") {
  module.exports = Calculadora;
}
