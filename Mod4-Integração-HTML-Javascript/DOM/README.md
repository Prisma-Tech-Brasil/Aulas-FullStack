Para preparar sua aula sobre como usar a DOM com JavaScript, aqui está um resumo focado nos conceitos e métodos essenciais.

-----

### **O que é a DOM?**

A **DOM** (Document Object Model) é a representação em árvore da estrutura de um documento HTML. Pense nela como uma API que o navegador cria para que o JavaScript possa interagir com o conteúdo, a estrutura e o estilo da página.

  * **Documento:** O objeto `document` é o ponto de entrada principal para toda a árvore da DOM.
  * **Elementos:** Cada tag HTML (como `<body>`, `<h1>`, `<p>`) é um **nó de elemento**.
  * **Nós de Texto:** O conteúdo textual dentro das tags é um **nó de texto**.
  * **Atributos:** Os atributos (`id`, `class`, `href`) também são nós.

A DOM permite que o JavaScript trate o HTML como objetos, permitindo a manipulação dinâmica da página.

-----

### **Principais Métodos para Selecionar Elementos**

A primeira etapa é sempre selecionar o elemento com o qual você quer interagir.

  * `document.getElementById('id-do-elemento')`: Seleciona um único elemento usando seu atributo **`id`**. É o método mais rápido para seleção.
  * `document.querySelector('seletor-css')`: Seleciona o **primeiro** elemento que corresponde a um seletor CSS (por exemplo, `'.minha-classe'`, `'#meu-id'`, `'h1'`).
  * `document.querySelectorAll('seletor-css')`: Seleciona **todos** os elementos que correspondem a um seletor CSS, retornando uma lista de nós (`NodeList`). Você pode iterar sobre essa lista usando `forEach`.
  * `document.getElementsByClassName('nome-da-classe')`: Seleciona todos os elementos com uma determinada classe, retornando uma coleção HTML (`HTMLCollection`).

-----

### **Manipulando o Conteúdo dos Elementos**

Depois de selecionar um elemento, você pode mudar o seu conteúdo.

  * `elemento.textContent`: Acessa ou define apenas o **conteúdo de texto** do elemento, ignorando qualquer marcação HTML interna.
  * `elemento.innerHTML`: Acessa ou define o **conteúdo HTML completo** dentro do elemento. Cuidado ao usar este método, pois ele pode expor sua página a ataques de injeção de código (XSS) se o conteúdo for de uma fonte não confiável.
  * `elemento.style.propriedadeCss`: Permite modificar o CSS **inline** do elemento. Por exemplo: `elemento.style.backgroundColor = 'blue';`. Note que as propriedades CSS com hífen (como `background-color`) se tornam `camelCase`.

-----

### **Trabalhando com Classes**

A manipulação de classes CSS é uma forma poderosa de alterar o estilo de um elemento de forma dinâmica.

  * `elemento.classList.add('nome-da-classe')`: Adiciona uma nova classe ao elemento.
  * `elemento.classList.remove('nome-da-classe')`: Remove uma classe do elemento.
  * `elemento.classList.toggle('nome-da-classe')`: Adiciona a classe se ela não estiver presente, ou a remove se já estiver. Perfeito para botões de "ligar/desligar".

-----

### **Criando e Adicionando Novos Elementos**

A DOM permite criar novos elementos do zero e inseri-los na página.

  * `document.createElement('tag')`: Cria um novo nó de elemento. Exemplo: `const novoParagrafo = document.createElement('p');`.
  * `elementoPai.appendChild(elementoFilho)`: Adiciona o `elementoFilho` como o último filho de `elementoPai`.
  * `elementoPai.prepend(elementoFilho)`: Adiciona o `elementoFilho` como o primeiro filho de `elementoPai`.
  * `elementoReferencia.before(novoElemento)`: Insere o `novoElemento` antes do `elementoReferencia`.
  * `elementoReferencia.after(novoElemento)`: Insere o `novoElemento` depois do `elementoReferencia`.

-----

### **Eventos na DOM**

Os eventos permitem que o JavaScript reaja a interações do usuário (cliques, digitação, etc.).

  * `elemento.addEventListener('nomeDoEvento', funcao)`: Adiciona um **ouvinte de evento** a um elemento. A `funcao` será executada sempre que o `nomeDoEvento` ocorrer.

**Exemplos de eventos comuns:**

  * `'click'`
  * `'mouseover'`
  * `'submit'` (para formulários)
  * `'keydown'` (para teclas pressionadas)

-----

### **Exemplo Prático (Exemplo para a aula)**

Exemplo simples para demonstrar a aplicação de vários conceitos:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Aula de DOM</title>
</head>
<body>
    <h1>Minha Aula de DOM</h1>
    <p id="paragrafo-exemplo">Este é um parágrafo inicial.</p>
    <button id="botao-muda-texto">Mudar Texto</button>
    <button id="botao-cria-elemento">Criar Elemento</button>
    <script>
        // Selecionando os elementos
        const paragrafo = document.getElementById('paragrafo-exemplo');
        const botaoMudaTexto = document.getElementById('botao-muda-texto');
        const botaoCriaElemento = document.getElementById('botao-cria-elemento');

        // Adicionando um ouvinte de evento para o botão de mudar texto
        botaoMudaTexto.addEventListener('click', () => {
            paragrafo.textContent = "O texto foi mudado com sucesso!";
            paragrafo.style.color = 'blue';
        });

        // Adicionando um ouvinte de evento para o botão de criar elemento
        botaoCriaElemento.addEventListener('click', () => {
            // Cria um novo parágrafo
            const novoParagrafo = document.createElement('p');
            novoParagrafo.textContent = "Novo parágrafo criado dinamicamente!";
            novoParagrafo.classList.add('destaque'); // Adiciona uma classe
            
            // Adiciona o novo parágrafo ao corpo da página
            document.body.appendChild(novoParagrafo);
        });
    </script>
</body>
</html>
```