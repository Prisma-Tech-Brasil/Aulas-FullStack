# Introdução ao jQuery

Este documento resume o que aprendemos na aula de introdução ao jQuery, abordando os principais conceitos e práticas de manipulação do DOM.

## O que é jQuery?

jQuery é uma biblioteca JavaScript rápida, pequena e rica em recursos que simplifica o trabalho com o DOM, eventos, animações e muito mais. Com o jQuery, tarefas que normalmente exigem muitas linhas de código em JavaScript podem ser realizadas de forma mais eficiente.

## Instalação do jQuery

### Utilizando CDN

Adicione o seguinte código no `<head>` do seu arquivo HTML:

```html
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
```

### Arquivo Local

Faça o download do jQuery em [jquery.com](https://jquery.com/) e inclua no seu projeto:

```html
<script src="caminho/para/jquery.min.js"></script>
```

## Principais Conceitos de Manipulação do DOM com jQuery

### 1. Seletores

Os seletores permitem encontrar e selecionar elementos do DOM de forma eficiente.

- Selecionar por tag:
  ```javascript
  $('tag') // Exemplo: $('p')
  ```

- Selecionar por classe:
  ```javascript
  $('.classe') // Exemplo: $('.btn')
  ```

- Selecionar por ID:
  ```javascript
  $('#id') // Exemplo: $('#menu')
  ```

### 2. Manipulação de Conteúdo

- Alterar o texto de um elemento:
  ```javascript
  $('#elemento').text('Novo texto');
  ```

- Alterar o HTML interno de um elemento:
  ```javascript
  $('#elemento').html('<strong>Texto em negrito</strong>');
  ```

- Alterar o valor de um campo de formulário:
  ```javascript
  $('#campo').val('Novo valor');
  ```

### 3. Manipulação de Atributos

- Alterar um atributo:
  ```javascript
  $('#link').attr('href', 'https://novosite.com');
  ```

- Remover um atributo:
  ```javascript
  $('#link').removeAttr('target');
  ```

### 4. Estilos e Classes

- Alterar o estilo diretamente:
  ```javascript
  $('#elemento').css('color', 'blue');
  ```

- Adicionar ou remover classes:
  ```javascript
  $('#elemento').addClass('nova-classe');
  $('#elemento').removeClass('classe-antiga');
  ```

### 5. Eventos

- Adicionar um evento de clique:
  ```javascript
  $('#botao').click(function() {
    alert('Botão clicado!');
  });
  ```

- Eventos alternativos:
  ```javascript
  $('#campo').on('focus', function() {
    console.log('Campo focado!');
  });
  ```

### 6. Inserção e Remoção de Elementos

- Inserir um elemento antes ou depois:
  ```javascript
  $('#elemento').before('<p>Texto antes</p>');
  $('#elemento').after('<p>Texto depois</p>');
  ```

- Remover um elemento:
  ```javascript
  $('#elemento').remove();
  ```

### 7. Efeitos Básicos

- Ocultar ou mostrar elementos:
  ```javascript
  $('#elemento').hide();
  $('#elemento').show();
  ```

- Alternar a visibilidade:
  ```javascript
  $('#elemento').toggle();
  ```

## Conclusão

Nesta aula, exploramos a manipulação do DOM utilizando o jQuery, incluindo seletores, manipulação de conteúdo, atributos, eventos e efeitos básicos. Essas ferramentas são essenciais para criar interfaces interativas e dinâmicas com maior facilidade e menos código.
