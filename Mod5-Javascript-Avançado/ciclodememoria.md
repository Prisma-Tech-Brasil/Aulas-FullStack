## Aula 2 - Ciclo de Memória

O **Ciclo de Memória** é o processo de alocação de memória para variáveis e funções e a posterior liberação dessa memória quando ela não é mais necessária. Em linguagens de baixo nível como C++, o desenvolvedor gerencia a alocação e desalocação manualmente. Já no JavaScript, esse processo é automático, gerido por um componente chamado **Garbage Collector** (Coletor de Lixo).

Compreender esse ciclo é crucial para evitar **memory leaks**, que ocorrem quando a memória de uma aplicação não é liberada corretamente, levando a uma degradação do desempenho e até mesmo a travamentos.

O ciclo de memória no JavaScript pode ser dividido em três etapas principais:

### **1. Alocação de Memória**

Essa é a primeira etapa, onde o JavaScript aloca espaço na memória para as suas variáveis. A alocação ocorre no momento da declaração.

**Exemplos:**

  * **Valores primitivos (strings, numbers, booleans, null, undefined):** O JavaScript aloca uma quantidade fixa de memória diretamente na "pilha" (Stack).

    ```javascript
    const numero = 123; // Aloca memória para o número 123
    const texto = "Olá mundo"; // Aloca memória para a string
    ```

  * **Objetos e funções:** O JavaScript aloca um espaço na "área de objetos" (Heap) e armazena um ponteiro para esse local na Stack. A Heap é uma região de memória maior e mais dinâmica, usada para dados complexos e de tamanho variável.

    ```javascript
    const objeto = { nome: "João" }; // Aloca o objeto na Heap e armazena um ponteiro na Stack
    const funcao = () => {}; // Aloca a função na Heap e armazena um ponteiro na Stack
    ```

### **2. Utilização da Memória**

Nesta fase, a memória alocada é utilizada pela sua aplicação, onde você lê e escreve valores nas variáveis.

```javascript
const usuario = { nome: "Ana" };
console.log(usuario.nome); // Lê o valor da propriedade 'nome'

usuario.nome = "Carlos"; // Altera o valor
```

### **3. Liberação da Memória**

Esta é a parte mais importante para o desenvolvedor JavaScript. O processo de desalocação é feito automaticamente pelo **Garbage Collector (GC)**. O GC é um algoritmo que "limpa" a memória que não está mais sendo usada.

O JavaScript utiliza o algoritmo **"mark and sweep"** para a coleta de lixo. A lógica é simples:

1.  O GC "marca" todas as variáveis que são "alcançáveis", ou seja, que podem ser acessadas a partir da raiz do programa (como a variável global `window` no navegador ou as variáveis no escopo da função atual).
2.  Em seguida, o GC "varre" a memória e libera o espaço de todas as variáveis que **não foram marcadas**.

**O que isso significa na prática?**

Se você tem uma variável que não pode mais ser referenciada por nenhuma parte do seu código, ela se torna "inacessível" e o Garbage Collector a libera, devolvendo a memória para o sistema.

#### **Causas Comuns de Memory Leaks**

  * **Variáveis globais:** Declarar variáveis sem `let`, `const` ou `var` no escopo global. Elas nunca são removidas da memória a menos que a página seja fechada.
  * **Timers e Observadores que não são limpos:** Se você usa `setInterval` ou `addEventListener` e não os remove com `clearInterval` ou `removeEventListener`, as referências a essas funções continuam na memória.
  * **Closures (Funções aninhadas):** Um `closure` pode manter uma referência a um escopo externo, mesmo que a função externa já tenha terminado. Se essa referência não for liberada, a memória também não é.

**Exemplo de Memory Leak com `setInterval`:**

```javascript
let numero = 0;
setInterval(() => {
  numero++;
  // A cada 1 segundo, a referência a 'numero' continua viva.
  // Se esse timer nunca for limpo, a variável 'numero' e a função de callback
  // permanecerão na memória para sempre.
}, 1000);
```

**Como evitar?**

```javascript
// Armazenar a referência do timer
const meuIntervalo = setInterval(() => {
  // ...
}, 1000);

// E, em algum momento, limpá-lo
clearInterval(meuIntervalo);
```

Entender como o JavaScript gerencia a memória, mesmo que de forma automática, é fundamental para escrever código performático e robusto. Ficar atento a referências indesejadas e garantir a limpeza de listeners e timers são as melhores práticas para evitar problemas de memória.