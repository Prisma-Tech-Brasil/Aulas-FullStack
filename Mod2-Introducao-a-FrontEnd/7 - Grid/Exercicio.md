## Galeria de Imagens Responsiva (CSS Grid)

**Objetivo:** Criar um layout de galeria que se adapta à largura da tela, garantindo que o cabeçalho e rodapé ocupem toda a largura e que o conteúdo principal use o CSS Grid para a disposição dos itens.

### 1\. Estrutura HTML

Crie um arquivo `index.html` com a seguinte estrutura básica:

1.  Um contêiner principal (`.page-wrapper`).
2.  Um `header` e um `footer` dentro do contêiner.
3.  Um elemento principal (`main.gallery-content`) que será o *container grid*.
4.  Dentro de `main.gallery-content`, crie 6 elementos `div.gallery-item` (que representarão as fotos/cards da galeria).

**Seu HTML deve ter esta hierarquia:**

```html
<div class="page-wrapper">
    <header>...</header>
    <main class="gallery-content">
        <div class="gallery-item">Item 1</div>
        <div class="gallery-item">Item 2</div>
        </main>
    <footer>...</footer>
</div>
```

### 2\. Desafio CSS (`style.css`)

Crie o arquivo `style.css` e estilize os elementos para atingir os seguintes requisitos:

#### A. Estrutura da Página (Grid Container Principal)

1.  Transforme o `.page-wrapper` em um contêiner grid.
2.  Defina que o layout principal (o `.page-wrapper`) deve ter 3 linhas:
      * A primeira linha (`header`) deve ter uma altura fixa (ex: `80px`).
      * A linha central (`main`) deve ocupar todo o espaço restante (`1fr`).
      * A última linha (`footer`) deve ter uma altura fixa (ex: `50px`).
3.  Garanta que o `.page-wrapper` ocupe a altura total da *viewport* (`100vh`).

#### B. Layout da Galeria (Grid Responsivo)

1.  Transforme o `main.gallery-content` em um contêiner grid.
2.  Use a propriedade **responsiva** de grid (`grid-template-columns`) que cria colunas automaticamente, com as seguintes regras:
      * Os itens devem ter um tamanho mínimo de **`250px`**.
      * Os itens devem crescer e diminuir para ocupar o espaço disponível e caber a maior quantidade de itens na linha (dica: use `repeat`, `auto-fit` e `minmax`).
3.  Adicione um espaçamento (`gap`) de **`10px`** entre os itens da galeria.
4.  Centralize os itens na horizontal dentro da `main.gallery-content` se houver espaço sobrando.

#### C. Estilização dos Itens

1.  Dê aos `.gallery-item` uma cor de fundo, borda e altura para que sejam visíveis (ex: `background-color: lightblue; padding: 20px;`).

-----

**Dica de Ouro:** O segredo para o layout responsivo da galeria está na combinação de valores na propriedade `grid-template-columns`. Procure por **`auto-fit`** e **`minmax()`**.
