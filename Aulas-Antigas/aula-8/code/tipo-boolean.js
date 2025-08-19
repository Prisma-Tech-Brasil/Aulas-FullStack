// Tipos Booleanos em JavaScript

// 1. O que é um booleano?
const verdadeiro = true;
const falso = false;

// 2. Comparações que retornam booleanos
const a = 5;
const b = 10;

console.log(a > b);  // false
console.log(a < b);  // true
console.log(a === 5); // true
console.log(b !== 10); // false

// 3. Operadores lógicos
const x = true;
const y = false;

console.log(x && y); // false
console.log(x && true); // true
console.log(x || y); // true
console.log(y || false); // false
console.log(!x); // false
console.log(!y); // true

// 4. Uso prático de booleanos em condicionais
const idade = 18;

if (idade >= 18) {
  console.log("Você é maior de idade.");
} else {
  console.log("Você é menor de idade.");
}
