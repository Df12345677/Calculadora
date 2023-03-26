let valorA = 0;
let valorB = 0;
let operador;
function agregarUnNumero(numero) {
  if (!operador) {
    if (String(valorA).length < 10) {
      valorA = Number(String(valorA) + String(numero));
    }
  } else {
    if (String(valorB).length < 10) {
      valorB = Number(String(valorB) + String(numero));
    }
  }
}

function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  return a / b;
}

function tenerResultado(a = 0, b = 0, operador) {
  return operador ? operador(a, b) : a;
}
