# Formulários em HTML - Guia Didático

## Introdução
Os formulários são componentes essenciais em aplicações web. Eles permitem a interação entre os usuários e o sistema, como envio de dados, pesquisa ou preenchimento de cadastros. 

Este material explora os principais elementos e atributos utilizados para criar formulários em HTML.

---

## Estrutura Básica de um Formulário

Um formulário é definido pelo elemento `<form>`, que organiza os campos de entrada:

```html
<form action="/enviar" method="POST">
  <!-- Campos do formulário -->
</form>
```

- **`action`**: URL onde os dados serão enviados.
- **`method`**: Método HTTP para envio (“GET” ou “POST”).

---

## Principais Elementos de Formulário

### 1. Input (Campo de Entrada)
O elemento `<input>` é usado para diversos tipos de entrada:

```html
<input type="text" name="nome" placeholder="Digite seu nome">
```

- **`type`**: Define o tipo de entrada (texto, email, senha, etc.).
- **`name`**: Identificador do campo para envio ao backend.
- **`placeholder`**: Texto exibido como dica.


Alguns dos Tipos Básicos do Input são:

#### text:
O tipo mais comum. Usado para campos de texto de uma única linha, como nome, endereço, ou qualquer outra informação de texto livre.

```html
<label for="nome">Nome Completo:</label>
<input type="text" id="nome" name="nome">
```

#### password:
Similar ao text, mas oculta os caracteres digitados. Ideal para senhas.

```html
<label for="senha">Senha:</label>
<input type="password" id="senha" name="senha">
```

#### email:
Campo para endereços de e-mail. O navegador pode validar se o texto inserido tem o formato de um e-mail válido (nome@exemplo.com).

```html
<label for="email">E-mail:</label>
<input type="email" id="email" name="email">
```

#### number:
Campo que aceita apenas números. Geralmente, exibe setas para aumentar ou diminuir o valor. Você pode definir valores mínimos e máximos com os atributos min e max.

```html
<label for="idade">Sua Idade:</label>
<input type="number" id="idade" name="idade" min="1" max="100">
```


### 2. Textarea (Campo de Texto Longo)
Usado para entradas com várias linhas de texto:

```html
<textarea name="mensagem" rows="4" cols="50" placeholder="Digite sua mensagem"></textarea>
```

- **`rows` e `cols`**: Tamanho do campo.

### 3. Select (Lista de Opções)
Criar menus suspensos:

```html
<select name="opcoes">
  <option value="opcao1">Opção 1</option>
  <option value="opcao2">Opção 2</option>
</select>
```

### 4. Checkbox (Caixa de Seleção)
Para seleção de opções múltiplas:

```html
<input type="checkbox" name="interesse" value="programacao"> Programação
<input type="checkbox" name="interesse" value="design"> Design
```

### 5. Radio (Botão de Opção)
Permite selecionar uma única opção:

```html
<input type="radio" name="genero" value="masculino"> Masculino
<input type="radio" name="genero" value="feminino"> Feminino
```

### 6. Botões

#### Botão de envio:
```html
<button type="submit">Enviar</button>
```

#### Botão reset:
```html
<button type="reset">Limpar</button>
```

---

## Atributos Importantes

- **`required`**: Torna o campo obrigatório.
- **`maxlength`**: Define o tamanho máximo de caracteres.
- **`pattern`**: Validação por expressão regular.

Exemplo:
```html
<input type="text" name="cpf" placeholder="Digite seu CPF" required pattern="\d{3}\.\d{3}\.\d{3}-\d{2}">
```

---

## Validação de Formulário

### Validação HTML5
Muitos atributos como `required` e `pattern` ajudam na validação sem necessidade de JavaScript.

### Validação com JavaScript
Adiciona maior controle e personalização:

```html
<form onsubmit="return validarFormulario()">
  <input type="email" id="email" required>
  <button type="submit">Enviar</button>
</form>

<script>
  function validarFormulario() {
    const email = document.getElementById('email').value;
    if (!email.includes('@')) {
      alert('Por favor, insira um email válido.');
      return false;
    }
    return true;
  }
</script>
```

---

## Conclusão

Combinando os elementos de formulários, atributos e validação, é possível criar interações eficientes e seguras em aplicações web.

Para mais informações, consulte a [documentação oficial do MDN](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/form).
