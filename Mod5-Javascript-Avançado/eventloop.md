## Aula 3 - Event Loop

O JavaScript é uma linguagem de programação de thread única, o que significa que ele executa apenas uma tarefa por vez. Se uma tarefa leva muito tempo para ser concluída, ela bloqueia a execução de todas as outras, fazendo com que a aplicação pare. Então, como o JavaScript lida com tarefas assíncronas, como buscar dados de uma API, sem congelar a interface do usuário? A resposta está no **Event Loop**.

O Event Loop é um mecanismo crucial no ambiente de execução do JavaScript (como o Node.js e o navegador) que gerencia a fila de chamadas de funções e as tarefas assíncronas. Ele permite que o JavaScript realize operações que não travam o programa, como a busca de dados na web, o que é fundamental para a experiência do usuário.

### **Principais componentes**

1.  **Pilha de Chamadas (Call Stack):** É a estrutura de dados que armazena a ordem em que as funções são chamadas. O JavaScript empilha as funções que precisam ser executadas e as remove quando elas retornam. Ele só pode executar uma função por vez.

2.  **Web APIs / Node APIs:** São funcionalidades fornecidas pelo ambiente de execução (não pelo JavaScript em si). Elas lidam com tarefas assíncronas, como `setTimeout`, `fetch` e eventos de clique do mouse. Quando uma função de uma Web API é chamada na Pilha de Chamadas, ela é transferida para o ambiente das APIs, liberando a Pilha para a próxima função.

3.  **Fila de Retorno (Callback Queue):** É uma fila onde as tarefas assíncronas concluídas das Web APIs são armazenadas, aguardando para serem movidas para a Pilha de Chamadas. Por exemplo, quando o temporizador de um `setTimeout` termina, a função de retorno (callback) é colocada nessa fila.

4.  **Event Loop:** O "coração" desse sistema. É um processo que constantemente verifica se a **Pilha de Chamadas** está vazia. Se estiver, o **Event Loop** pega a primeira função da **Fila de Retorno** e a move para a **Pilha de Chamadas** para que ela seja executada. Esse ciclo se repete continuamente.

### **Como tudo isso funciona na prática?**

Vamos analisar um exemplo simples:

```javascript
console.log("Início");

setTimeout(() => {
  console.log("Dentro do setTimeout");
}, 2000);

console.log("Fim");
```

1.  O `console.log("Início")` é colocado na **Pilha de Chamadas** e executado.
2.  A função `setTimeout` é empurrada para a **Pilha de Chamadas**. O JavaScript a reconhece como uma tarefa assíncrona e a passa para as **Web APIs**. A **Pilha de Chamadas** fica livre imediatamente.
3.  O `console.log("Fim")` é adicionado à **Pilha de Chamadas** e executado.
4.  Enquanto isso, a **Web API** do `setTimeout` está esperando 2 segundos. Após esse tempo, a função de retorno (`() => { ... }`) é enviada para a **Fila de Retorno**.
5.  O **Event Loop** percebe que a **Pilha de Chamadas** está vazia. Ele então pega a função de retorno da **Fila de Retorno** e a move para a **Pilha de Chamadas**.
6.  A função de retorno é executada e o `console.log("Dentro do setTimeout")` é finalmente exibido.

O resultado no console será:

```
Início
Fim
Dentro do setTimeout
```

É importante notar que, mesmo que o `setTimeout` tivesse um tempo de espera de 0 milissegundos, a sua função de retorno ainda seria enviada para a **Fila de Retorno** e só seria executada após todos os itens da **Pilha de Chamadas** serem processados. Isso garante que as operações assíncronas não bloqueiem o fluxo principal do código.

Compreender o Event Loop é fundamental para dominar conceitos como **Callbacks** e **Promises**, já que ele é o mecanismo que permite que essas ferramentas funcionem de forma assíncrona sem travar a aplicação.