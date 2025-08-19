
# Funções em JavaScript

Funções são blocos de código que realizam uma tarefa específica e podem ser reutilizados ao longo do programa. Elas ajudam a organizar, reutilizar e manter o código mais limpo.

---

## O que é uma função?

- Uma função é um conjunto de instruções agrupadas.
- Pode receber entradas (parâmetros).
- Pode retornar um valor.
- É executada quando "chamada".

---

## Como declarar uma função?

### 1. Função declarada (Function Declaration)

```js
function saudacao(nome) {
  return `Olá, ${nome}!`;
}
```

- Nomeada.
- Pode ser chamada antes de ser declarada (hoisting).

### 2. Função anônima atribuída a uma variável (Function Expression)

```js
const soma = function(a, b) {
  return a + b;
};
```

- Atribuída a uma variável.
- Não sofre hoisting.

### 3. Arrow Function (função de seta)

```js
const multiplicar = (a, b) => a * b;
```

- Sintaxe mais curta.
- Não possui seu próprio `this`.
- Útil para funções pequenas e callbacks.

---

## Como chamar uma função?

```js
console.log(saudacao('Tuai'));  // Olá, Tuai!
console.log(soma(2, 3));        // 5
console.log(multiplicar(4, 5)); // 20
```

---

## Parâmetros e argumentos

- Parâmetros são os nomes que definimos na função.
- Argumentos são os valores passados na chamada da função.

```js
function apresentar(nome, idade) {
  return `Meu nome é ${nome} e tenho ${idade} anos.`;
}

apresentar('Tuai', 30);
```

---

## Valores padrão para parâmetros

```js
function saudacao(nome = 'Visitante') {
  return `Olá, ${nome}!`;
}

saudacao(); // Olá, Visitante!
```

---

## Função que não retorna nada (void)

```js
function dizerOi() {
  console.log('Oi!');
}

dizerOi(); // Oi!
```

---

## Por que usar funções?

- Evita repetição de código.
- Facilita a manutenção.
- Deixa o código mais organizado.
- Permite reutilização e modularização.

---

## Funções Matemáticas com `Math`

O objeto global `Math` oferece várias funções para operações matemáticas comuns. Ele não é uma função, mas um objeto com métodos estáticos.

### Exemplos úteis:

```js
Math.round(4.7);    // 5    -> arredonda para o inteiro mais próximo
Math.floor(4.7);    // 4    -> arredonda para baixo
Math.ceil(4.2);     // 5    -> arredonda para cima
Math.abs(-10);      // 10   -> valor absoluto (sem sinal)
Math.sqrt(16);      // 4    -> raiz quadrada
Math.pow(2, 3);     // 8    -> potência (2 elevado a 3)
Math.min(5, 10, 2); // 2    -> menor valor
Math.max(5, 10, 2); // 10   -> maior valor
Math.random();      // 0.0 a 0.9999... número aleatório entre 0 e 1
```

### Como gerar um número aleatório entre dois valores?

```js
function randomEntre(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

randomEntre(1, 10); // retorna número inteiro entre 1 e 10 (inclusive)
```

---

## Onde aprender mais?

- [MDN - Functions](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Functions)
- [JavaScript.info - Functions](https://javascript.info/function-basics)
- Livro: *You Don’t Know JS* (Kyle Simpson) — capítulo sobre funções
