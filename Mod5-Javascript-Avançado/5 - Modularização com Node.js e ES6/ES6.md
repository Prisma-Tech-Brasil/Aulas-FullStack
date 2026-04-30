## Aula 5 - ES6 (ECMAScript 2015)

O **ES6**, ou **ECMAScript 2015**, é a sexta versão do padrão de linguagem JavaScript. Lançada em 2015, trouxe uma série de novas funcionalidades e melhorias de sintaxe (também conhecidas como "açúcar sintático") que simplificaram tarefas comuns e resolveram problemas antigos da linguagem.

### **Principais Novidades do ES6**

#### **1. Declaração de Variáveis: `let` e `const`** 🆕

Antes do ES6, a única forma de declarar uma variável era com `var`. As palavras-chave `let` e `const` foram introduzidas para resolver problemas de escopo e mutabilidade.

  * **`let`**: Permite a declaração de variáveis com **escopo de bloco**. Isso significa que a variável só existe dentro do bloco de código (delimitado por chaves `{}`) onde foi declarada. Variáveis declaradas com `let` podem ser reatribuídas.
  * **`const`**: Declara uma constante, que também tem escopo de bloco. Uma vez que o valor é atribuído, ele **não pode ser reatribuído**. Isso torna o código mais seguro e previsível.

#### **2. Arrow Functions** 🏹

As **arrow functions** fornecem uma sintaxe mais curta e limpa para escrever funções. A principal diferença, no entanto, é a forma como elas tratam a palavra-chave `this`. Elas não criam seu próprio `this`, mas herdam o `this` do contexto onde foram criadas. Isso resolve o problema comum de perder o contexto em funções de callback.

```javascript
// Função tradicional
const somar = function(a, b) {
  return a + b;
};

// Arrow function equivalente
const somarArrow = (a, b) => a + b;
```

#### **3. Classes** 🧑‍🏫

O ES6 introduziu a sintaxe de `class` para criar objetos e herança de forma mais clara e organizada. Embora sejam apenas "açúcar sintático" sobre a herança baseada em protótipos do JavaScript, as classes tornam o código mais legível para desenvolvedores vindos de outras linguagens de programação orientadas a objetos.

```javascript
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
  apresentar() {
    return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
  }
}

const joao = new Pessoa("João", 30);
console.log(joao.apresentar());
```

#### **4. Template Literals** \`\`

**Template Literals** (ou Template Strings) usam crases `` ` `` para permitir que você insira variáveis ou expressões diretamente em strings, de forma mais simples e legível. Eles também suportam strings de múltiplas linhas sem a necessidade do caractere de nova linha `\n`.

```javascript
const nome = "Maria";
const saudacao = `Olá, ${nome}!`; // Isso é um template literal
console.log(saudacao); // Saída: Olá, Maria!
```

#### **5. Desestruturação (Destructuring)** 🧩

A **desestruturação** é uma forma conveniente de extrair valores de arrays ou propriedades de objetos em variáveis separadas.

```javascript
// Desestruturação de objeto
const usuario = { id: 1, nome: "Ana" };
const { nome, id } = usuario;
console.log(nome); // Saída: Ana

// Desestruturação de array
const cores = ["vermelho", "verde", "azul"];
const [cor1, cor2] = cores;
console.log(cor1); // Saída: vermelho
```

#### **6. Operador de Espalhamento (Spread Operator)** `...` ✨

O operador de espalhamento permite que um iterável (como um array ou string) seja expandido em elementos individuais. É útil para criar cópias de arrays ou objetos, e para combinar múltiplos iteráveis.

```javascript
const array1 = [1, 2, 3];
const array2 = [...array1, 4, 5];
console.log(array2); // Saída: [1, 2, 3, 4, 5]
```

### **O Impacto do ES6**

O ES6 foi um marco para o JavaScript, introduzindo funcionalidades que se tornaram a base do desenvolvimento moderno. Entender esses conceitos é crucial, pois eles são amplamente utilizados em frameworks e bibliotecas populares como React, Angular e Vue.js, além de tornarem o código mais elegante, seguro e fácil de manter.