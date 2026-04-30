# Aula 1 - Callbacks e Promises

### **Introdução à Assincronicidade**

Em JavaScript, muitas operações não são instantâneas. Pense em uma requisição de rede, a leitura de um arquivo ou um temporizador (`setTimeout`). Se o JavaScript esperasse por cada uma dessas tarefas, o programa ficaria "congelado", travando a interface do usuário e prejudicando a experiência. Para evitar isso, a linguagem utiliza a **assincronicidade**, permitindo que o código continue a ser executado enquanto a tarefa demorada é processada em segundo plano.

### **Callbacks**

Um **callback** é uma função que é passada como argumento para outra função e será executada depois que a primeira função terminar a sua tarefa. É uma forma simples e tradicional de lidar com código assíncrono.

Vamos ver um exemplo prático:

```javascript
function fazerAlgoComAtraso(callback) {
  setTimeout(() => {
    console.log("Tarefa concluída!");
    callback(); // Chama a função de retorno (callback)
  }, 2000);
}

function outraFuncao() {
  console.log("Executando a próxima etapa.");
}

fazerAlgoComAtraso(outraFuncao);
```

No código acima, a função `outraFuncao` só é chamada quando a função `fazerAlgoComAtraso` termina sua execução, depois de 2 segundos. O problema com callbacks é o que chamamos de **"Callback Hell"** (Inferno de Callbacks). Isso acontece quando temos várias operações assíncronas aninhadas uma dentro da outra, tornando o código difícil de ler, entender e manter.

Exemplo de **Callback Hell**:

```javascript
// Exemplo didático e simplificado
function buscarDadosDoUsuario(callback) {
  // ... lógica para buscar usuário
  // Quando a busca termina:
  callback();
}

function buscarDadosDoPost(callback) {
  // ... lógica para buscar post
  // Quando a busca termina:
  callback();
}

buscarDadosDoUsuario(() => {
  buscarDadosDoPost(() => {
    // ... mais callbacks aninhados...
    console.log("Tudo pronto!");
  });
});
```

### **Promises**

As **Promises** foram introduzidas no ES6 para resolver o problema do "Callback Hell" e para gerenciar operações assíncronas de uma forma mais estruturada, legível e robusta. Uma Promise pode estar em um de três estados:

  - **Pending (Pendente):** Estado inicial. A operação ainda não foi concluída.
  - **Fulfilled (Realizada):** A operação foi concluída com sucesso.
  - **Rejected (Rejeitada):** A operação falhou.

Uma Promise representa o valor final de uma operação assíncrona. Ela nos dá uma maneira de encadear operações sequenciais e lidar com erros de forma mais elegante usando os métodos `.then()` e `.catch()`.

  - `.then()`: É chamado quando a Promise é **realizada (fulfilled)**. O valor da Promise é passado como argumento.
  - `.catch()`: É chamado quando a Promise é **rejeitada (rejected)**. O erro da Promise é passado como argumento.

Vamos refatorar o exemplo anterior usando Promises:

```javascript
function buscarDadosDoUsuario() {
  return new Promise((resolve, reject) => {
    // A simulação abaixo tem 2 segundos de atraso
    setTimeout(() => {
      console.log("Usuário encontrado!");
      resolve("Dados do usuário"); // Resolve a Promise com sucesso
    }, 2000);
  });
}

function buscarDadosDoPost() {
  return new Promise((resolve, reject) => {
    // A simulação abaixo tem 1 segundo de atraso
    setTimeout(() => {
      console.log("Posts encontrados!");
      resolve("Dados do post"); // Resolve a Promise com sucesso
    }, 1000);
  });
}

buscarDadosDoUsuario()
  .then(() => {
    // Quando a primeira Promise é resolvida, a próxima é chamada
    return buscarDadosDoPost();
  })
  .then(() => {
    console.log("Tudo pronto! Ambas as operações foram concluídas.");
  })
  .catch((erro) => {
    // Captura qualquer erro em qualquer uma das Promises
    console.error("Ocorreu um erro:", erro);
  });
```

Com Promises, a leitura do código se torna muito mais clara, pois o fluxo de execução é plano e sequencial, mesmo que as operações sejam assíncronas. O tratamento de erros é centralizado no bloco `.catch()`, facilitando a depuração.

É importante notar que Promises não são a única forma de lidar com assincronicidade. No futuro, você estudará o `async/await`, que é uma sintaxe mais moderna construída sobre Promises, tornando o código assíncrono ainda mais parecido com o síncrono. Mas, para entender o `async/await`, é fundamental ter um bom entendimento de como as Promises funcionam.
