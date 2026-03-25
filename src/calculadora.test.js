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

  xtest("Guarda correctamente la operación en el historial", () => {
    const calc = new Calculadora();

    calc.sumar(2, 3);

    const historial = calc.obtenerHistorial();

    expect(historial[0].operacion).toBe("2 + 3");
    expect(historial[0].resultado).toBe(5);
  });

  test("Debe limpiar historial correctamente", () => {
    calc.sumar(1, 1);
    calc.limpiarHistorial();
    expect(calc.obtenerHistorial().length).toBe(0);
  });

  test("Obtiene historial correctamente", () => {
    const calc = new Calculadora();

    calc.sumar(1, 1);
    calc.sumar(2, 2);
    calc.dividir(2, 2);

    const historial = calc.obtenerHistorial();

    expect(historial.length).toBe(3);
  });

  test("Debe restar correctamente 5 - 3", () => {
    const calc = new Calculadora();
    expect(calc.restar(5, 3)).toBe(2);
  });

  test("Debe multiplicar correctamente 4 * 3", () => {
    const calc = new Calculadora();
    expect(calc.multiplicar(4, 3)).toBe(12);
  });

  test("Debe dividir correctamente 10 / 2", () => {
    const calc = new Calculadora();
    expect(calc.dividir(10, 2)).toBe(5);
  });

  test("Lanza error si el valor no es un número", () => {
    const calc = new Calculadora();

    expect(() => calc.sumar("a", 5)).toThrow(
      "El valor debe ser un número válido",
    );
  });

  test("Lanza error si el valor es NaN", () => {
    const calc = new Calculadora();

    expect(() => calc.sumar(NaN, 5)).toThrow(
      "El valor debe ser un número válido",
    );
  });

  test("El historial inicia vacío", () => {
    const calc = new Calculadora();

    expect(calc.obtenerHistorial().length).toBe(0);
  });
});
