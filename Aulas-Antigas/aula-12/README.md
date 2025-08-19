
# Listas e Matrizes em JavaScript

**Arrays** são uma estrutura de dados em JavaScript que permite armazenar uma coleção de elementos de qualquer tipo.

## 📌 Criando uma lista

```javascript
const lista = [1, 2, 3, 4, 5];
```

Podemos acessar os elementos da seguinte forma:

```javascript
console.log(lista[0]); // Saída: 1
```

## 🔁 Iterando sobre uma lista

Podemos usar um laço `for` para percorrer uma lista:

```javascript
for (let i = 0; i < lista.length; i++) {
   console.log(`Elemento ${i} = ${lista[i]}`);
}
```

## 🛠 Operações comuns

- **Soma de todos os elementos:**
```javascript
let soma = 0;
for (let i = 0; i < lista.length; i++) {
  soma += lista[i];
}
console.log("Soma total:", soma);
```

- **Transformar em string formatada:**
```javascript
console.log(lista.join(" "));
```

As **matrizes**, também chamadas de **arrays multidimensionais**, são arrays que contêm outros arrays como elementos. Em JavaScript, as matrizes mais comuns são as bidimensionais (2D), parecidas com tabelas.

## 📌 Criando uma matriz

```javascript
const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
```

Aqui temos uma matriz 3x3 (3 linhas e 3 colunas). Podemos acessar os elementos da seguinte forma:

```javascript
console.log(matriz[0][1]); // Saída: 2 (linha 0, coluna 1)
```

## 🔁 Iterando sobre uma matriz

Podemos usar dois laços `for` para percorrer uma matriz:

```javascript
for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    console.log(`Elemento [${i}][${j}] = ${matriz[i][j]}`);
  }
}
```

## 🛠 Operações comuns

- **Soma de todos os elementos:**
```javascript
let soma = 0;
for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    soma += matriz[i][j];
  }
}
console.log("Soma total:", soma);
```

- **Transformar em string formatada:**
```javascript
for (let linha of matriz) {
  console.log(linha.join(" "));
}
```

## 🧠 Desafios sugeridos

1. Crie uma matriz 4x4 preenchida com números de 1 a 16.
2. Encontre o maior número de uma matriz qualquer.
3. Inverta a ordem dos elementos da diagonal principal.

## ✅ Conclusão

Matrizes são úteis para representar tabelas, mapas, grades e outros dados organizados em linhas e colunas. Com elas, você pode resolver problemas complexos de forma estruturada.

