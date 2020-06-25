//Calcular el IMC

function calcular() {
  var p = document.getElementById("peso").value;
  var a = document.getElementById("altura").value;
  const r = p / (a * a);

  // Comparar el resultado para dar un diagnostico

  var diagnostico =
    r < 17
      ? "Desnutricion"
      : 18 <= r && r <= 20
      ? "Bajo peso"
      : 21 <= r && r <= 25.9
      ? "Normal"
      : 26 <= r && r <= 30.9
      ? "Sobrepeso"
      : 31 <= r && r <= 35.9
      ? "Obesidad"
      : 36 <= r && r <= 40
      ? "Obesidad marcada"
      : "Obesidad morbida";

  document.getElementById("prompt").innerHTML = diagnostico;
}

var agenda = [];
class Dia {
  constructor(f, d, a, m, c) {
    this.fecha = f;
    this.desayuno = d;
    this.almuerzo = a;
    this.merienda = m;
    this.cena = c;
  }
}

function agendar() {
  agenda.push(
    new Dia(
      document.getElementById("fecha").value,
      document.getElementById("breakfast").value,
      document.getElementById("lunch").value,
      document.getElementById("snack").value,
      document.getElementById("dinner").value
    )
  );

  for (var dia of agenda) {
    document.getElementById("f").innerHTML = "Fecha: " + dia.fecha;
    document.getElementById("d").innerHTML = "Desayuno: " + dia.desayuno;
    document.getElementById("a").innerHTML = "Almuerzo: " + dia.almuerzo;
    document.getElementById("m").innerHTML = "Merienda: " + dia.merienda;
    document.getElementById("c").innerHTML = "Cena: " + dia.cena;
  }
}

function mostrarAgenda() {
  for (var dia of agenda) {
    document.getElementById("f").innerHTML = "Fecha: " + agenda.fecha;
    document.getElementById("d").innerHTML = "Desayuno: " + dia.desayuno;
    document.getElementById("a").innerHTML = "Almuerzo: " + dia.almuerzo;
    document.getElementById("m").innerHTML = "Merienda: " + dia.merienda;
    document.getElementById("c").innerHTML = "Cena: " + agenda.cena;
  }
}

mostrarAgenda();
