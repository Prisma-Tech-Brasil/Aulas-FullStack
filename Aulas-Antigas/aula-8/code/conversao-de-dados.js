/* -*-*-*-**-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- */
// Transformando em Number:

// Convertendo uma String
console.log(Number("42"));
// Convertendo um Boolean
console.log(Number(true));

// Transformando em número Int (inteiro):
const num1 = "2";
console.log(parseInt(num1));
console.log(Number.parseInt(num1));
/* 
Não há diferença funcional entre as duas; ambas convertem uma string para um número inteiro. A escolha entre as duas formas é puramente de estilo ou de organização do código.
*/

// Transformando em número Float (não-inteiro, ou flutuante):
const num2 = "2.45";
// O parseInt transforma um número não-inteiro em inteiro
console.log(parseInt(num2));
// O float transforma em número com ponto flutuante (não-inteiro)
console.log(parseFloat(num2));



/* -*-*-*-**-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- */
// Transformando em String (texto):

const array = ["Pedro", "João", "Lucas"]
console.log(array.toString());

// Podemos usar tanto o .toString()
console.log((42).toString());
console.log((true).toString());

// Quanto o String(value)
console.log(String(42));
console.log(String(true));

// Também podemos converter em um objeto de strings
console.log(JSON.stringify({ a: 1, b: 2 }));
console.log(JSON.stringify(array));



/* -*-*-*-**-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- */
// Conversão para Boolean (verdadeiro/falso):

// Boolean(value): Converte um valor para true ou false.
console.log(Boolean(1));
console.log(Boolean(0));

//Operadores Lógicos: Dupla negação !! também converte para booleano.
console.log(!!"Hello");
console.log(!!0);



/* -*-*-*-**-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- */
//Conversão para Objeto

// Object(value): Converte um valor primitivo para um objeto.
console.log(Object(42));
console.log(Object("Hello"));



/* -*-*-*-**-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- */
// Conversão para Array

// Array.from(): Converte um objeto iterável ou semelhante a array
// (como uma NodeList) em um array real.
const arrayLike = { 0: 'a', 1: 'b', length: 2 };
console.log(Array.from(arrayLike));

// Array.of(): Cria um novo array a partir dos argumentos passados.
console.log(Array.of(1, 2, 3));



/* -*-*-*-**-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- */
// Conversão de Datas

// Date(value): Converte uma string, número,
// ou outro objeto para uma instância de Date.
console.log(new Date("2024-08-10"));
console.log(new Date(1628547600000));