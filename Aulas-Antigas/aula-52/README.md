# Resumo da Aula: Manipulação de DOM em JavaScript

## O que aprendemos nesta aula

Nesta aula, exploramos conceitos fundamentais sobre **Manipulação de DOM (Document Object Model)** com JavaScript, focando em:

### 1. Introdução ao DOM
- Entendemos que o **DOM** é a estrutura hierárquica que representa um documento HTML em forma de árvore.
- Cada elemento HTML é um **nó** que pode ser manipulado com JavaScript.

### 2. Seleção de Elementos
Aprendemos como selecionar elementos no DOM para interagir com eles:
- **`document.getElementById('id')`**: Seleciona um elemento pelo seu ID.
- **`document.querySelector('seletor')`**: Seleciona o primeiro elemento que corresponde ao seletor CSS.
- **`document.querySelectorAll('seletor')`**: Seleciona todos os elementos que correspondem ao seletor CSS.

### 3. Manipulação de Conteúdo e Estilo
Estudamos como alterar conteúdo e classes dos elementos:
- **`element.textContent`**: Altera ou obtém o texto de um elemento.
- **`element.innerHTML`**: Define ou obtém o conteúdo HTML interno de um elemento.
- **`element.classList.add('classe')`**: Adiciona uma classe a um elemento.
- **`element.classList.remove('classe')`**: Remove uma classe de um elemento.
- **`element.classList.toggle('classe')`**: Adiciona ou remove uma classe dependendo da sua presença.

### 4. Manipulação de Eventos
Aprendemos a responder a interações do usuário com eventos:
- **`element.addEventListener('evento', callback)`**: Escuta eventos como cliques, teclas pressionadas ou carregamento de página.

Exemplos de eventos comuns:
- **`click`**: Disparado quando o elemento é clicado.
- **`mouseover`**: Disparado quando o mouse passa sobre o elemento.
- **`keydown`**: Disparado quando uma tecla é pressionada.

### 5. Projeto Prático
Implementamos dois exemplos práticos:
1. **Toggle de Tema**: Alternar entre temas claro e escuro usando classes e manipulando o DOM.
2. **Menu Responsivo**: Criamos um menu que se expande e recolhe ao clicar no botão de menu (hambúrguer).

---

## Próximos Passos
No próximo módulo, continuaremos explorando manipulação avançada de DOM, incluindo:
- Criação e remoção dinâmica de elementos.
- Manipulação de atributos.
- Melhores práticas para trabalhar com eventos.

---

**Parabéns pelo progresso!** 🎉 Continue praticando os exercícios e aplicando os conceitos aprendidos para reforçar seu conhecimento.
