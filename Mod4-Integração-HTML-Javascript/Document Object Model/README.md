## Introdução ao Document Object Model (DOM)

O **Document Object Model (DOM)** é uma interface de programação para documentos web (como **HTML** e **XML**). Ele representa a página de forma que os programas possam mudar a **estrutura**, o **conteúdo** e o **estilo** do documento.

Pense no DOM como uma **árvore de nós** 

[Image of DOM tree structure]
. Cada nó representa uma parte do documento: um elemento, um atributo, um texto, etc. O JavaScript (ou outra linguagem de script) usa o DOM para acessar e manipular a página da web.

---

## Como o DOM Funciona

Quando um navegador carrega uma página HTML, ele faz o seguinte:

1.  **Parsing (Análise):** O navegador lê o código **HTML** e o interpreta.
2.  **Criação do DOM:** Ele cria a representação em árvore do DOM. O nó principal é o objeto `document`, que representa toda a página.
3.  **Visualização:** O navegador usa o DOM (juntamente com o CSSOM - CSS Object Model) para renderizar a página.

A grande vantagem do DOM é permitir que o **JavaScript** interaja com o HTML:

* **Encontrar** elementos específicos na árvore.
* **Mudar** o conteúdo de um elemento (o texto, o HTML interno).
* **Mudar** os atributos (como o `src` de uma imagem, ou o `class` de um elemento).
* **Adicionar** ou **remover** elementos.
* **Reagir** a eventos (como cliques do mouse ou pressionamento de teclas).

---

## Comandos Básicos (JavaScript)

Aqui estão alguns comandos básicos de JavaScript usados para interagir com o DOM:

### 1. Selecionar/Encontrar Elementos

| Comando | Descrição | Exemplo |
| :--- | :--- | :--- |
| `document.getElementById()` | Seleciona um elemento pelo seu atributo **`id`** (deve ser único). | `document.getElementById("titulo")` |
| `document.querySelector()` | Seleciona o **primeiro** elemento que corresponde a um seletor CSS (tag, classe, id, etc.). | `document.querySelector(".conteudo")` |
| `document.querySelectorAll()` | Seleciona **todos** os elementos que correspondem a um seletor CSS e retorna uma `NodeList`. | `document.querySelectorAll("li")` |
| `document.getElementsByClassName()` | Seleciona todos os elementos pela sua **classe**. | `document.getElementsByClassName("item")` |

### 2. Manipular Conteúdo e Atributos

| Comando | Descrição | Exemplo |
| :--- | :--- | :--- |
| `element.innerHTML` | Obtém ou define o conteúdo **HTML** (incluindo tags) de um elemento. | `el.innerHTML = "Novo <b>texto</b>"` |
| `element.textContent` | Obtém ou define o conteúdo de **texto puro** de um elemento. | `el.textContent = "Apenas texto"` |
| `element.setAttribute()` | Adiciona ou muda o valor de um **atributo** (ex: `src`, `class`). | `el.setAttribute("class", "ativo")` |
| `element.style.propriedade` | Define uma propriedade de **estilo CSS** (ex: `color`, `fontSize`). | `el.style.color = "blue"` |

### 3. Criar e Adicionar Elementos

| Comando | Descrição | Exemplo |
| :--- | :--- | :--- |
| `document.createElement()` | Cria um novo nó de elemento (ex: um `<div>` ou `<p>`). | `let novoP = document.createElement("p")` |
| `parentNode.appendChild()` | Anexa um nó como o último filho de um nó pai. | `divPai.appendChild(novoP)` |
