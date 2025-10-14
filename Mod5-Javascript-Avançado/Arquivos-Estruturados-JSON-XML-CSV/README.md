# Arquivos Estruturados de Dados (JSON, XML e CSV)

Arquivos estruturados de dados são aqueles que possuem um **formato bem definido e organizado**, facilitando o armazenamento, a manipulação e a análise por sistemas de computador. Eles são essenciais para o intercâmbio de dados e a integração entre diferentes aplicações.




---

### 1. CSV (Comma-Separated Values)

* **Natureza:** O formato mais simples e leve, representando dados em formato de **tabela**.
* **Estrutura:** É um arquivo de texto plano onde cada linha corresponde a um registro, e os valores (campos) dentro de cada linha são separados por um caractere delimitador (geralmente vírgula ou ponto e vírgula).
* **Vantagens:** Excelente para exportação e importação em programas de planilhas e para lidar com grandes volumes de dados devido à sua **alta compactação e simplicidade**.
### 2. XML (eXtensible Markup Language)

* **Natureza:** Uma linguagem de marcação que define regras para codificar documentos de forma legível por humanos e por máquinas.
* **Estrutura:** Utiliza uma estrutura **hierárquica (em árvore)** com tags de abertura e fechamento para definir elementos e atributos, permitindo a descrição de estruturas de dados complexas e aninhadas.
* **Vantagens:** Possui um foco maior na **estrutura e validação** (usando XSD ou DTD), tornando-o ideal para transferência segura e formal de dados entre sistemas, como em documentos governamentais ou industriais. É mais detalhado (*verbose*) que o JSON.

### 3. JSON (JavaScript Object Notation)

* **Natureza:** Um formato de intercâmbio de dados **leve e legível por humanos**.
* **Estrutura:** Utiliza uma estrutura hierárquica baseada em **pares chave-valor** (objetos) e listas (arrays), modelando a forma como dados são representados em muitas linguagens de programação.
* **Vantagens:** É o formato padrão na maioria das **APIs Web** e serviços REST. É mais compacto e rápido de processar por máquinas em comparação com o XML. É considerado um formato **semiestruturado**, pois embora tenha uma estrutura, ela pode ser mais flexível que a de um banco de dados relacional.



#### Manipulação de JSON no Javascript

#### Metodo Parse
```js
const stringProdutos = '[{"ID": 101, "Nome": "Notebook"}, {"ID": 102, "Nome": "Mouse"}]';

// Converte a string JSON em um Array de Objetos JavaScript
const arrayProdutos = JSON.parse(stringProdutos);
console.log(arrayProdutos); 

console.log(arrayProdutos[0].Nome); // Output: Notebook

arrayProdutos.push({ "ID": 103, "Nome": "Teclado" });
console.log(arrayProdutos.length); // Output: 3
```

#### Metodo Stringify

```js
const novoProduto = { ID: 104, Nome: "Monitor", Preco: 1500.00 };

// 1. Adiciona o novo produto ao array existente (do passo anterior)
arrayProdutos.push(novoProduto);
// 2. Converte o Array de volta para uma string JSON
const novaStringJSON = JSON.stringify(arrayProdutos);

console.log(novaStringJSON); 

// O stringify aceita um terceiro argumento para formatar (indentação)
const stringFormatada = JSON.stringify(arrayProdutos, null, 2);
console.log(stringFormatada); 

```

```js
const fs = require('fs');
const arrayProdutos = [{ ID: 1, Nome: "Teste" }]; // Exemplo de objeto JS

// 1. Converter objeto JS para string JSON
const dadosParaSalvar = JSON.stringify(arrayProdutos, null, 2);

// 2. Escrever a string JSON no arquivo
fs.writeFile('dados.json', dadosParaSalvar, (err) => {
    if (err) {
        console.error("Erro ao salvar o arquivo JSON:", err);
    } else {
        console.log("Arquivo dados.json salvo com sucesso!");
    }
});
```


---

## Resumo

| Formato | Sigla/Nome | Estrutura Principal | Principais Aplicações |
| :--- | :--- | :--- | :--- |
| **CSV** | Comma-Separated Values | **Tabelar (Linhas e Colunas)** | Planilhas, bases de dados simples, grandes volumes de dados tabulares. |
| **JSON** | JavaScript Object Notation | **Hierárquica (Chave-Valor)** | APIs Web (comunicação entre cliente e servidor), armazenamento NoSQL. |
| **XML** | eXtensible Markup Language | **Hierárquica (Tags e Elementos)** | Integração de sistemas legados, documentos complexos (ex: Nota Fiscal Eletrônica), validação rigorosa. |