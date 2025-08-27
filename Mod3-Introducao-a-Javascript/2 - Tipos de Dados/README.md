# Aula x - Tipos de Dados

No universo da programação, os tipos de dados são a base de tudo. Eles definem a natureza das informações que uma variável pode armazenar, como números, textos ou valores lógicos. Em JavaScript, um dos pontos mais importantes é que a linguagem é de tipagem dinâmica. Isso significa que você não precisa declarar o tipo de uma variável; o próprio JavaScript determina isso em tempo de execução.

## Declaração e Atribuição de dados
Em JavaScript, declaração e atribuição são dois conceitos fundamentais que, embora pareçam semelhantes, têm papéis distintos na forma como lidamos com variáveis. Entender essa diferença é o primeiro passo para escrever um código limpo e com menos erros.

Declarar uma variável é o ato de dar um nome a ela. É como reservar um espaço na memória do computador. Em JavaScript, isso é feito usando uma das três palavras-chave: var, let ou const.

## Tipos Primitivos de Dados

Para nossa aula de hoje, veremos apenas os tipos primitivos de dados em javascript, estes são os tipos de dados mais básicos e simples. Uma variável que armazena um tipo primitivo contém diretamente o seu valor.

### Number

O tipo `Number` representa tanto números inteiros (como `10`, `250`) quanto números de ponto flutuante (float), ou seja, decimais (como `3.14`, `-0.5`). Não há distinção entre eles.

```JavaScript
let idade = 30; // Número inteiro
let preco = 99.99; // Número decimal (ponto flutuante)
```

É importante reparar, que diferente da lingua portuguesa nao utilizamos virgula `(,)` para separacao da parte decimal, mas sim o ponto `(.)`

### String
O tipo String é usado para representar texto. Você pode criar strings usando aspas simples ('...'), aspas duplas ("...") ou crases (...). A crase é especial, pois permite usar o que chamamos de template literals, que facilitam a inclusão de variáveis e expressões dentro da string.

```JavaScript
let nome = 'Maria';
let sobrenome = "Silva";
let saudacao = `Olá, ${nome} ${sobrenome}!`; // Uso de template literal
console.log(saudacao); // Saída: Olá, Maria Silva!
```

### Boolean
O tipo Boolean (ou booleano) é o mais simples de todos, pois só pode ter dois valores: true (verdadeiro) ou false (falso). Ele é fundamental para a lógica de controle e para tomar decisões no seu código, como em estruturas condicionais (if, else).

``` JavaScript
let isAutenticado = true;
let temDesconto = false;
Null e Undefined
```
Esses dois tipos podem causar alguma confusão no início, mas a diferença é clara:

Undefined: Significa que uma variável foi declarada, mas ainda não recebeu um valor. É o valor padrão que o JavaScript atribui a variáveis não inicializadas.

Null: Representa a ausência intencional de um valor. É um valor que você, como programador, atribui a uma variável para indicar que ela não tem nada.

```JavaScript
let minhaVariavel; // Variável declarada, mas não tem valor. O tipo é undefined.
console.log(minhaVariavel); // Saída: undefined

let outraVariavel = null; // A variável tem um valor, que é a ausência de valor.
console.log(outraVariavel); // Saída: null
```