# Exercicios

### **Exercício 1: O Contador Interativo**

**Objetivo:** Criar uma interface simples que exibe um número e permite incrementá-lo e decrementá-lo com botões.

1.  Crie um arquivo HTML com um elemento `<h1>` com o `id="contador"` e o número inicial `0`.
2.  Adicione dois botões: um com o `id="botao-aumentar"` e outro com o `id="botao-diminuir"`.
3.  No JavaScript, selecione o elemento do contador e os dois botões.
4.  Crie duas funções: uma para aumentar o valor do contador e outra para diminuí-lo.
5.  Use `addEventListener` para que, quando o botão de aumentar for clicado, o número no `<h1>` seja incrementado em `1`.
6.  Faça o mesmo para o botão de diminuir, decrementando o número em `1`.
7.  **(Desafio Extra):** Mude a cor do número para verde quando ele for maior que `0` e para vermelho quando for menor que `0`. Se for `0`, a cor deve ser preta.

### **Exercício 2: O Gerador de Lista de Tarefas**

**Objetivo:** Permitir que o usuário adicione novas tarefas a uma lista usando um campo de texto e um botão.

1.  Crie um arquivo HTML com um `<h1>`, um campo de entrada de texto (`<input type="text" id="nova-tarefa">`), e um botão (`<button id="adicionar-tarefa">Adicionar</button>`).
2.  Adicione uma lista não ordenada vazia (`<ul id="lista-de-tarefas"></ul>`).
3.  No JavaScript, selecione o campo de texto, o botão e a lista.
4.  Adicione um ouvinte de evento (`'click'`) ao botão.
5.  Quando o botão for clicado, obtenha o valor do campo de texto.
6.  Crie um novo elemento de item de lista (`<li>`) e defina seu `textContent` para o valor do campo de texto.
7.  Adicione esse novo `<li>` à lista `<ul>` existente.
8.  **(Desafio Extra):** Adicione um ouvinte de evento a cada item da lista. Quando um item for clicado, ele deve ter uma classe CSS chamada `concluida` adicionada, que pode aplicar um estilo como `text-decoration: line-through`. Use `classList.toggle` para permitir que o usuário marque e desmarque a tarefa.

### **Exercício 3: O Seletor de Cores Dinâmico**

**Objetivo:** Mudar a cor de fundo de uma caixa (`div`) quando o mouse passar sobre botões coloridos.

1.  Crie um arquivo HTML com uma caixa (`<div id="caixa" style="height: 100px; width: 100px; border: 1px solid black;"></div>`).
2.  Abaixo da caixa, crie três botões, cada um com uma cor diferente (`<button id="cor-vermelha">Vermelho</button>`, `<button id="cor-azul">Azul</button>`, `<button id="cor-verde">Verde</button>`).
3.  No JavaScript, selecione a caixa e todos os três botões.
4.  Adicione um ouvinte de evento (`'mouseover'`) ao botão "Vermelho" que mude o estilo da caixa (`caixa.style.backgroundColor`) para `red`.
5.  Faça o mesmo para os outros dois botões, mudando a cor para azul e verde, respectivamente.
6.  **(Desafio Extra):** Use `document.querySelectorAll` para selecionar todos os botões de cor de uma só vez. Em seguida, use um loop (`forEach`) para adicionar o ouvinte de evento a cada botão, de forma que você não precise escrever o mesmo código três vezes.