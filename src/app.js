const calc = new window.Calculadora();

function operar(tipo) {
  const n1 = parseFloat(document.getElementById("num1").value);
  const n2 = parseFloat(document.getElementById("num2").value);

  try {
    const resultado = calc[tipo](n1, n2);
    document.getElementById("resultado").textContent =
      "Resultado: " + resultado;
    actualizarHistorial();
  } catch (error) {
    document.getElementById("resultado").textContent = error.message;
  }
}

function actualizarHistorial() {
  const lista = document.getElementById("historial");
  lista.innerHTML = "";

  calc.obtenerHistorial().forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.operacion} = ${item.resultado}`;
    lista.appendChild(li);
  });
}

function limpiarHistorial() {
  calc.limpiarHistorial();
  actualizarHistorial();
}
