//Calcular el IMC

function calcular() {
  var p = document.getElementById("peso").value;
  var a = document.getElementById("altura").value;
  const r = p / (a * a);
  console.log(r);

  // Comparar el resultado para dar un diagnostico

  var diagnostico = 0;

  if (r < 17) {
    diagnostico = "Desnutricion";
  } else if (18 <= r && r <= 20) {
    diagnostico = "Bajo peso";
  } else if (21 <= r && r <= 25.9) {
    diagnostico = "Normal";
  } else if (26 <= r && r <= 30.9) {
    diagnostico = "Sobrepeso";
  } else if (31 <= r && r <= 35.9) {
    diagnostico = "Obesidad";
  } else if (36 <= r && r <= 40) {
    diagnostico = "Obesidad marcada";
  } else if (r > 40) {
    diagnostico = "Obesidad morbida";
  }
  document.getElementById("prompt").innerHTML = diagnostico;
}

var agenda = [];
class dia {
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
    new dia(
      document.getElementById("fecha").value,
      document.getElementById("breakfast").value,
      document.getElementById("lunch").value,
      document.getElementById("snack").value,
      document.getElementById("dinner").value
    )
  );
  console.log(agenda);
  for (let index = 0; index < agenda.length; index++) {
    document.getElementById("f").innerHTML = "Fecha: " + agenda[index].fecha;
    document.getElementById("d").innerHTML =
      "Desayuno: " + agenda[index].desayuno;
    document.getElementById("a").innerHTML =
      "Almuerzo: " + agenda[index].almuerzo;
    document.getElementById("m").innerHTML =
      "Merienda: " + agenda[index].merienda;
    document.getElementById("c").innerHTML = "Cena: " + agenda[index].cena;
  }
}

function mostrarAgenda() {
  for (let index = 0; index < agenda.length; index++) {
    for (let index = 0; index < agenda.length; index++) {
      document.getElementById("f").innerHTML = "Fecha: " + agenda[index].fecha;
      document.getElementById("d").innerHTML =
        "Desayuno: " + agenda[index].desayuno;
      document.getElementById("a").innerHTML =
        "Almuerzo: " + agenda[index].almuerzo;
      document.getElementById("m").innerHTML =
        "Merienda: " + agenda[index].merienda;
      document.getElementById("c").innerHTML = "Cena: " + agenda[index].cena;
    }
  }
}

mostrarAgenda();
