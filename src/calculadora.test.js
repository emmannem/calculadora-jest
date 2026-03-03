const Calculadora = require("./calculadora");

// Agrupalos pruebas relacionadas
describe("Calculadora Avanzada", () => {
  let calc;

  beforeEach(() => {
    calc = new Calculadora();
  });

  // definimos una prueba individual
  test("Suma correctamente", () => {
    // indicamos lo que esperamos que ocurra
    expect(calc.sumar(2, 3)).toBe(5);
  });

  test("No permite dividir entre cero", () => {
    expect(() => calc.dividir(4, 0)).toThrow("No se puede dividir entre cero");
  });

  test("Guarda operaciones en historial", () => {
    calc.sumar(2, 2);
    expect(calc.obtenerHistorial().length).toBe(1);
  });

  test("Limpia historial correctamente", () => {
    calc.sumar(1, 1);
    calc.limpiarHistorial();
    expect(calc.obtenerHistorial().length).toBe(0);
  });
});
