## Aula 4 - Manipulação de Erros

A manipulação de erros é um pilar fundamental no desenvolvimento de software. Em JavaScript, erros podem acontecer por uma variedade de motivos: um nome de variável incorreto, uma requisição de rede que falha, ou um valor inesperado em um cálculo. Lidar com esses erros de forma adequada garante que a aplicação não trave e que o usuário receba uma mensagem clara sobre o que deu errado.

### **O que é um Erro?**

Um erro em JavaScript é um objeto que contém informações sobre o problema que ocorreu, como uma mensagem descritiva e a pilha de chamadas (call stack), que mostra a sequência de funções que levou ao erro.

### **Blocos `try...catch`**

A forma mais comum e recomendada de lidar com erros síncronos é utilizando os blocos `try...catch`.

  - **`try`:** Este bloco contém o código que você suspeita que possa causar um erro. Se um erro ocorrer dentro deste bloco, a execução é interrompida e o controle é transferido para o bloco `catch`.
  - **`catch`:** Este bloco é executado somente se um erro ocorrer no bloco `try`. Ele recebe o objeto de erro como um argumento, permitindo que você lide com o problema de forma controlada.

**Sintaxe e Exemplo:**

```javascript
try {
  // Código que pode gerar um erro
  const resultado = 10 / 0; // Isso não é um erro em JS, mas vamos supor que fosse uma chamada de função que falha
  console.log(variavelNaoDeclarada); // Isso causa um erro de referência
} catch (erro) {
  // Código para lidar com o erro
  console.error("Ocorreu um erro!");
  console.error(erro.message); // Exibe a mensagem do erro
  console.error(erro.name); // Exibe o nome do tipo de erro
} finally {
  // Opcional: Este bloco sempre será executado, independentemente de ter ocorrido um erro ou não.
  console.log("A execução do try...catch foi concluída.");
}
```

No exemplo acima, a linha que tenta acessar `variavelNaoDeclarada` gera um erro. O JavaScript imediatamente pula para o bloco `catch`, onde a mensagem de erro é exibida no console. O bloco `finally` é opcional, mas útil para limpar recursos (como fechar um arquivo ou uma conexão) que precisam ser liberados independentemente do resultado.

### **Propagação de Erros (`throw`)**

Você pode criar e lançar seus próprios erros usando a palavra-chave `throw`. Isso é útil para validar entradas de funções e garantir que a sua lógica não seja executada com dados inválidos.

```javascript
function verificarNumero(numero) {
  if (typeof numero !== "number") {
    // Lança um erro se o parâmetro não for um número
    throw new TypeError("O argumento deve ser um número.");
  }
  if (numero < 0) {
    // Lança um erro se o número for negativo
    throw new Error("O número deve ser positivo.");
  }
  return numero;
}

try {
  verificarNumero("texto");
} catch (erro) {
  console.error("Erro capturado:", erro.message);
}
```

### **Manipulação de Erros Assíncronos**

Com a popularização de Promises e `async/await`, a manipulação de erros assíncronos também evoluiu.

#### **Com Promises**

O método `.catch()` é o equivalente assíncrono do bloco `catch`. Ele é encadeado na Promise e é chamado se a Promise for rejeitada (`reject`).

```javascript
function buscarDados() {
  return new Promise((resolve, reject) => {
    // Simulando uma falha na busca
    const sucesso = false;
    if (sucesso) {
      resolve("Dados carregados com sucesso!");
    } else {
      reject("Falha na requisição de rede.");
    }
  });
}

buscarDados()
  .then((dados) => {
    console.log(dados);
  })
  .catch((erro) => {
    console.error("Erro assíncrono:", erro);
  });
```

#### **Com `async/await`**

A combinação de `async/await` com `try...catch` oferece uma sintaxe que permite tratar erros assíncronos de forma síncrona, tornando o código mais legível.

```javascript
async function carregarDadosDoUsuario() {
  try {
    const resposta = await fetch("https://api.exemplo.com/dados"); // O 'await' pausa a execução aqui
    if (!resposta.ok) {
      throw new Error("Erro na resposta da API.");
    }
    const dados = await resposta.json();
    console.log("Dados recebidos:", dados);
  } catch (erro) {
    console.error("Não foi possível carregar os dados:", erro.message);
  }
}

carregarDadosDoUsuario();
```

Neste exemplo, se a chamada `fetch` falhar, ou se a resposta da API não for bem-sucedida, o bloco `catch` será executado, lidando com o erro de forma clara.

Dominar a manipulação de erros é essencial para criar aplicações robustas que podem se recuperar de problemas e fornecer uma experiência de usuário consistente.
