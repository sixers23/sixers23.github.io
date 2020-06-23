function calcular() {
  var p = document.getElementById("peso").value;
  var a = document.getElementById("altura").value;
  var r = p / (a * a);
  document.getElementById("prompt").innerHTML = r;
  console.log(r);
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
}
