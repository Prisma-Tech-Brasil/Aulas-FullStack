### Módulos no Node.js

O sistema de módulos do Node.js permite que você organize seu código em arquivos separados. Cada arquivo é um **módulo**. Para compartilhar funcionalidades entre eles, você precisa **exportar** de um lado e **importar** do outro.

-----

### Tópicos Chave

  * **Escopo de Módulo:** Cada arquivo é um módulo com seu próprio escopo. Variáveis e funções definidas em um módulo não são visíveis em outro por padrão.
  * **`module.exports`:** Objeto usado para **exportar** funcionalidades de um módulo. Tudo o que você atribui a ele se torna público e acessível de fora.
  * **`require()`:** Função usada para **importar** um módulo. Ela retorna o objeto que foi exportado (`module.exports`).
  * **Tipos de Módulos:**
      * **Nativos:** Já vêm com o Node.js (ex: `fs`, `http`).
      * **Locais:** Arquivos que você cria em seu próprio projeto.
      * **De Terceiros:** Instalados via **npm** (ex: `express`, `lodash`).

-----

### Exemplo Simples

#### 1\. Módulo `math.js` (Exportando)

```javascript
// math.js
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

// Exportando as funções
module.exports = {
  add,
  subtract
};
```

#### 2\. Módulo `app.js` (Importando e Usando)

```javascript
// app.js
// Importando o módulo 'math.js'
const math = require('./math.js');

const resultSum = math.add(5, 3);
const resultSub = math.subtract(10, 4);

console.log('Resultado da soma:', resultSum); // Resultado da soma: 8
console.log('Resultado da subtração:', resultSub); // Resultado da subtração: 6
```