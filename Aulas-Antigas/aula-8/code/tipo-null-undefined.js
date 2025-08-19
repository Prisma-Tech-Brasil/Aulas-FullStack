// Tipos Undefined, Null e NaN em JavaScript

// 1. O que é undefined?
let valorIndefinido;
console.log(valorIndefinido);

const objeto = {};
console.log(objeto.propriedadeInexistente);

// 2. O que é null?
let valorNulo = null;
console.log(valorNulo);

// 3. O que é NaN?
// NaN significa "Not-a-Number" e é um valor que representa uma operação matemática que não resulta em um número válido.
const resultado = 0 / 0;
console.log(resultado);

// 4. Diferenças entre undefined, null e NaN
let variavel;
console.log(variavel); // undefined

let variavelNula = null;
console.log(variavelNula); // null

const valorNaoNumero = NaN;
console.log(valorNaoNumero); // NaN

// 5. Comparações
console.log(undefined == null); // true
console.log(undefined === null); // false

console.log(isNaN(valorNaoNumero)); // true
console.log(isNaN(123)); // false

console.log(NaN === NaN); // false

// 6. Uso prático
// NaN é útil para verificar se um cálculo ou operação retornou um valor não numérico.
function verificarNumero(valor) {
  if (isNaN(valor)) {
    console.log("Valor não é um número.");
  } else {
    console.log("Valor:", valor);
  }
}

verificarNumero(10); // Valor: 10
verificarNumero("texto"); // Valor não é um número.
verificarNumero(0 / 0); // Valor não é um número.
