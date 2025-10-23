# AJAX no JQuery

**AJAX** (*Asynchronous JavaScript and XML*) é um conjunto de técnicas de desenvolvimento web que permite que aplicações web se comuniquem com um servidor em segundo plano, sem interferir no estado atual da página.

| Conceito | Descrição |
| :--- | :--- |
| **Assíncrono** | A principal característica. O navegador envia a requisição e continua executando outras tarefas (o usuário pode interagir com a página) enquanto espera a resposta do servidor. |
| **Comunicação em Segundo Plano** | Permite carregar ou enviar dados de/para o servidor sem a necessidade de recarregar a página inteira. Isso torna as aplicações mais rápidas e interativas. |
| **Tecnologias Envolvidas** | Originalmente, o AJAX usava o objeto `XMLHttpRequest` (JS puro) e dados no formato XML. Atualmente, usa-se o objeto `fetch` (JS moderno) e, principalmente, o formato **JSON** (JavaScript Object Notation), que é mais leve e fácil de processar. |
| **Fluxo Básico** | 1. **Evento:** Ocorre uma ação (ex: clique, perda de foco). 2. **Requisição:** O JavaScript envia uma solicitação (GET, POST, etc.) ao servidor. 3. **Processamento:** O servidor processa a solicitação e envia uma resposta. 4. **Ação no Cliente:** O JavaScript recebe a resposta e a usa para atualizar seletivamente o DOM (o conteúdo da página). |

-----

## Funções AJAX Simplificadas do jQuery

O jQuery oferece atalhos para a função principal `$.ajax()`, tornando as requisições mais rápidas de escrever.

### 1\. `$.ajax(options)`

É o método principal e mais completo. Permite a configuração detalhada de todos os aspectos da requisição (URL, tipo de dado, método HTTP, *callbacks* de sucesso e erro, etc.).

**Sintaxe:**

```javascript
$.ajax({
    url: '...',
    type: 'GET' | 'POST' | 'PUT' | 'DELETE',
    dataType: 'json' | 'html' | 'xml',
    success: function(data) { /* ... */ },
    error: function(xhr, status, error) { /* ... */ }
});
```

### 2\. `$.get(url, [data], [callback], [dataType])`

Usado para requisições do tipo **GET** (para buscar dados do servidor).

**Uso Comum:** Recuperar HTML ou dados JSON de uma URL.

```javascript
// Exemplo: Buscar uma lista de posts e usar JSON
$.get('api/posts', function(posts) {
    console.log('Posts recebidos:', posts);
}, 'json');
```

### 3\. `$.post(url, [data], [callback], [dataType])`

Usado para requisições do tipo **POST** (para enviar dados e criar novos recursos no servidor).

**Uso Comum:** Envio de dados de um formulário para um script de processamento.

```javascript
// Exemplo: Enviar dados de login
var dados = { usuario: 'joao', senha: '123' };
$.post('api/login', dados, function(resposta) {
    alert(resposta.mensagem);
}, 'json');
```

### 4\. `$.getJSON(url, [data], [callback])`

Um atalho específico para requisições **GET** que esperam um retorno em formato **JSON**.

**Uso Comum:** Consultar APIs que retornam JSON, como a ViaCEP.

```javascript
// Exemplo: Consultar o ViaCEP
var cep = '01001000';
$.getJSON('https://viacep.com.br/ws/' + cep + '/json/', function(endereco) {
    if (!endereco.erro) {
        $("#rua").val(endereco.logradouro);
    }
});
```

### 5\. `$.load(url, [data], [callback])`

Este método é especializado em carregar dados **HTML** de uma URL e inseri-los diretamente em um elemento HTML selecionado.

**Uso Comum:** Inserir conteúdo de outro arquivo HTML em uma `<div>`.

```javascript
// Carrega o conteúdo de 'conteudo.html' e insere na div#resultado
$("#resultado").load("conteudo.html", function() {
    alert("Conteúdo carregado!");
});
```