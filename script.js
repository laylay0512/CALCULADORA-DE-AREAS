

function validar(valores) {
  return valores.every(v => !isNaN(v) && v > 0);
}

function calcularTriangulo() {
  const base = parseFloat(document.getElementById("baseTriangulo").value);
  const altura = parseFloat(document.getElementById("alturaTriangulo").value);
  if (!validar([base, altura])) return alert("Insira valores válidos para base e altura.");
  const area = (base * altura) / 2;
  document.getElementById("resultadoTriangulo").textContent = "Área: " + area.toFixed(2);
}

function calcularQuadrado() {
  const lado = parseFloat(document.getElementById("ladoQuadrado").value);
  if (!validar([lado])) return alert("Insira um valor válido para o lado.");
  const area = lado * lado;
  document.getElementById("resultadoQuadrado").textContent = "Área: " + area.toFixed(2);
}

function calcularCirculo() {
  const raio = parseFloat(document.getElementById("raioCirculo").value);
  if (!validar([raio])) return alert("Insira um valor válido para o raio.");
  const area = Math.PI * raio * raio;
  document.getElementById("resultadoCirculo").textContent = "Área: " + area.toFixed(2);
}

function calcularTrapezio() {
  const baseMaior = parseFloat(document.getElementById("baseMaiorTrapezio").value);
  const baseMenor = parseFloat(document.getElementById("baseMenorTrapezio").value);
  const altura = parseFloat(document.getElementById("alturaTrapezio").value);
  if (!validar([baseMaior, baseMenor, altura])) return alert("Insira valores válidos para o trapézio.");
  const area = ((baseMaior + baseMenor) * altura) / 2;
  document.getElementById("resultadoTrapezio").textContent = "Área: " + area.toFixed(2);
}

function calcularRetangulo() {
  const base = parseFloat(document.getElementById("baseRetangulo").value);
  const altura = parseFloat(document.getElementById("alturaRetangulo").value);
  if (!validar([base, altura])) return alert("Insira valores válidos para base e altura.");
  const area = base * altura;
  document.getElementById("resultadoRetangulo").textContent = "Área: " + area.toFixed(2);
}
