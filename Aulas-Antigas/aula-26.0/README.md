# Aula: Manipulação de DOM Básica

## 1. O que é DOM?
O DOM (Document Object Model) é uma interface que permite ao JavaScript acessar e manipular elementos HTML e CSS de uma página, representando sua estrutura como uma árvore de objetos.

- **Definição:** Interface para manipulação de elementos.
- **Estrutura:** Cada elemento HTML é representado como um nó na árvore DOM.

---

## 2. Principais Seletores do DOM
Os seletores permitem encontrar elementos na árvore DOM para manipulação. 

- **`document.getElementById(id)`**
  - Seleciona um elemento pelo `id`.
  ```javascript
  const titulo = document.getElementById('titulo');
  ```

- **`document.querySelector(seletor)`**
  - Retorna o **primeiro elemento** correspondente ao seletor CSS.
  ```javascript
  const paragrafo = document.querySelector('.texto');
  ```

- **`document.querySelectorAll(seletor)`**
  - Retorna **todos os elementos** que correspondem ao seletor CSS (como NodeList).
  ```javascript
  const itens = document.querySelectorAll('li');
  ```

- **`document.getElementsByClassName(nomeClasse)`**
  - Retorna uma coleção de elementos com a classe especificada.
  ```javascript
  const botoes = document.getElementsByClassName('botao');
  ```

- **`document.getElementsByTagName(nomeTag)`**
  - Retorna uma coleção de elementos pela tag especificada.
  ```javascript
  const divs = document.getElementsByTagName('div');
  ```

---

## 3. Métodos Principais para Manipulação
Aqui estão os métodos mais usados para manipular elementos no DOM:

### **Alterar Conteúdo**
- **`.innerText`** ou **`.textContent`**
  - Modifica o texto do elemento.
  ```javascript
  titulo.innerText = 'Novo Título';
  ```

### **Alterar HTML Interno**
- **`.innerHTML`**
  - Modifica ou insere HTML dentro do elemento.
  ```javascript
  div.innerHTML = '<p>Texto com HTML</p>';
  ```

### **Alterar Atributos**
- **`.setAttribute(nome, valor)`**
  - Define ou altera um atributo do elemento.
  ```javascript
  imagem.setAttribute('src', 'nova-imagem.jpg');
  ```

### **Alterar Estilos**
- **`.style.propriedade`**
  - Altera diretamente estilos CSS.
  ```javascript
  paragrafo.style.color = 'blue';
  ```

### **Adicionar Classes**
- **`classList.add()`, `classList.remove()`, `classList.toggle()`**
  ```javascript
  paragrafo.classList.add('destaque');
  ```

### **Adicionar ou Remover Elementos**
- **`document.createElement(tag)`**
  - Cria um novo elemento.
- **`.appendChild(elemento)` ou `.removeChild(elemento)`**
  ```javascript
  const novoItem = document.createElement('li');
  lista.appendChild(novoItem);
  ```

---

## 4. Exemplos Práticos

### **1. Mudar o texto de um botão ao clicar**
```javascript
const botao = document.querySelector('button');
botao.addEventListener('click', () => {
  botao.innerText = 'Clicado!';
});
```

### **2. Criar uma lista dinâmica**
```javascript
const lista = document.querySelector('ul');
const botao = document.querySelector('button');

botao.addEventListener('click', () => {
  const novoItem = document.createElement('li');
  novoItem.innerText = 'Novo Item';
  lista.appendChild(novoItem);
});
```

---

## 5. Boas Práticas
- Use **`querySelector`** e **`querySelectorAll`** para maior flexibilidade com seletores CSS.
- Evite manipular diretamente o DOM muitas vezes; manipule o conteúdo em memória e atualize de uma só vez.
- Use eventos (`addEventListener`) para garantir interatividade sem modificar diretamente o HTML.

---

Com esses conceitos, você poderá criar páginas dinâmicas e interativas de forma eficiente!
