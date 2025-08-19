function saudacao(nome) {
  console.log("Olá " + nome);

  console.log("Olá", nome);

  console.log(`Olá ${nome}`);
}
// saudacao("Wallace")

function somar(a = 0, b = 0) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  return a / b;
}

function e(a, b, c) {
  return a && b && c; // a E b E c
}

function ou(a, b, c) {
  return a || b || c; // a OU b OU c
}

function nao(a) {
  return !a
}

function quadrado(num) {
  return num ** 2
}

console.log(Math.cbrt(125));

Math.sqrt(9)