const igual = document.getElementById("igual");
let resultado;
const borrarTodo = document.getElementById("borrarTodo");

const borrar = document.getElementById("borrar");
borrarTodo.addEventListener("click", borrarTodoFn);

function borrarTodoFn() {
	valorA = 0;
	valorB = 0;
	operador = "";
	renderizar();
}

function renderizar() {
	if (valorB) {
		pantalla.innerText = valorA + operadorSimbolo + valorB;
	} else if (operador) {
		pantalla.innerText = valorA + operadorSimbolo;
	} else if (valorA) {
		pantalla.innerText = valorA;
	} else {
		pantalla.innerText = 0;
	}
}
borrar.addEventListener("click", borrarFn);

function borrarFn() {
	if (valorB) {
		valorB = Number(borrarUltimoCaracter(valorB));
	} else if (operador) {
		operador = "";
		operadorSimbolo = "";
	} else {
		valorA = Number(borrarUltimoCaracter(valorA));
	}
	renderizar();
}

function borrarUltimoCaracter(valor) {
	let arrayValor = String(valor).split("");
	arrayValor.pop();
	return arrayValor.join("");
}

igual.addEventListener("click", igualFN);
function igualFN() {
	let operadorFuncion;
	switch (operador) {
		case "dividir":
			operadorFuncion = dividir;
			break;
		case "multiplicar":
			operadorFuncion = multiplicar;
			break;
		case "sumar":
			operadorFuncion = sumar;
			break;
		case "restar":
			operadorFuncion = restar;
			break;
	}
	resultado = tenerResultado(valorA, valorB, operadorFuncion);
	valorA = resultado;
	operador = undefined;
	operadorSimbolo = undefined;
	valorB = 0;
	renderizar();
}

const pantalla = document.getElementById("pantalla");

const operadores = document.querySelectorAll(".operador");
operadores.forEach((operadorBoton) => {
	operadorBoton.addEventListener("click", (e) => {
		if (valorA) {
			operador = e.target.getAttribute("operador");
			operadorSimbolo = e.target.innerText;
			renderizar();
		}
	});
});

const numeros = document.querySelectorAll(".numero");
numeros.forEach((numero) => {
	numero.addEventListener("click", (e) => {
		agregarUnNumero(e.target.innerText);
	});
});

let valorA = 0;
let valorB = 0;
let operador;
let operadorSimbolo;

function agregarUnNumero(numero) {
	if (!operador) {
		valorA = Number(String(valorA) + String(numero));
		renderizar();
	} else {
		valorB = Number(String(valorB) + String(numero));
		renderizar();
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

window.addEventListener("keyup", (e) => {
	if (e.key === "Enter") {
		igualFN();
	}
	if (e.key === "Backspace") {
		borrarFn();
	}
	if (e.key === "c") {
		borrarTodoFn();
	}
	switch (e.key) {
		case "+":
			operador = "sumar";
			operadorSimbolo = "+";
			renderizar();
			break;
		case "-":
			operador = "restar";
			operadorSimbolo = "-";
			renderizar();
			break;
		case "*":
			operador = "multiplicar";
			operadorSimbolo = "x";
			renderizar();
			break;
		case "/":
			operador = "dividir";
			operadorSimbolo = "÷";
			renderizar();
			break;
	}

	if (e.key <= 10) {
		agregarUnNumero(e.key);
	}
});
