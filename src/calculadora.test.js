const Calculadora = require("./calculadora");

// Agrupalos pruebas relacionadas
describe("Calculadora", () => {
  let calc;

  beforeEach(() => {
    calc = new Calculadora();
  });

  // definimos una prueba individual
  test("Debe sumar correctamente", () => {
    // indicamos lo que esperamos que ocurra
    expect(calc.sumar(2, 3)).toBe(5);
  });

  test("Debe mostar error al dividir entre cero", () => {
    expect(() => calc.dividir(4, 0)).toThrow("No se puede dividir entre cero");
  });

  test("Debe guardar operaciones en historial", () => {
    calc.sumar(2, 2);
    expect(calc.obtenerHistorial().length).toBe(1);
  });

  test("Debe limpiar historial correctamente", () => {
    calc.sumar(1, 1);
    calc.limpiarHistorial();
    expect(calc.obtenerHistorial().length).toBe(0);
  });
});
