// Formas de concatenar strings:
const idade = 24;
console.log("Minha idade é: " + idade);

console.log("minha idade é: ", idade);

console.log(`Minha idade é: ${idade}`);

// Usando o Operador +
const primeiraParte = "Hello";
const segundaParte = "World";
const frase1 = primeiraParte + " " + segundaParte + "!";
console.log(frase1);

// Usando o Operador +=
let saudacao = "Hello";
saudacao += " ";
saudacao += "World";
saudacao += "!";
console.log(saudacao);

// Usando Template Literals
const frase2 = `${primeiraParte} ${segundaParte}!`;
console.log(frase2);

const textoMultiLinha = `Este é um
texto que se estende
por várias linhas.`;
console.log(textoMultiLinha);

// Usando String.concat()
const frase3 = primeiraParte.concat(" ", segundaParte, "!");
console.log(frase3);

const frase4 = "".concat("Hello", " ", "World", "!");
console.log(frase4);

// Usando Array.join()
const palavras = ["Hello", "World"];
const frase5 = palavras.join(" ") + "!";
console.log(frase5);

// Usando Array.reduce()
const frase6 = palavras.reduce((acc, curr) => acc + " " + curr) + "!";
console.log(frase6);

// Usando String.prototype.replace()
const base = "Hello _!";
const frase7 = base.replace("_", "World");
console.log(frase7);

// Usando String.fromCharCode()
const frase8 = String.fromCharCode(72, 101, 108, 108, 111) + " World!";
console.log(frase8);

// Exemplos combinando métodos
const nome = "John";
const saudacao2 = "Hello " + `${nome}, welcome to the ` + "World!";
console.log(saudacao2);

const saudacao3 = "".concat(
  `Hello ${nome}`,
  ", ",
  "welcome!",
  " Have a great day!"
);
console.log(saudacao3);

// Usando toUpperCase() e toLowerCase()
const texto = "JavaScript é divertido!";
console.log(texto.toUpperCase()); // "JAVASCRIPT É DIVERTIDO!"
console.log(texto.toLowerCase()); // "javascript é divertido!"

// Usando repeat() para repetir uma string
const repeticao = "Ha! ".repeat(3);
console.log(repeticao); //
