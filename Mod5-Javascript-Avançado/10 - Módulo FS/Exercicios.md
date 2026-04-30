Excelente\! A melhor forma de aprender é colocando a mão na massa. Aqui estão três exercícios práticos para seus alunos, focados em criar códigos com o módulo `fs`.

-----

### **Exercício 1: Contador de Palavras em um Arquivo**

**Objetivo:** Crie um programa que leia o conteúdo de um arquivo de texto chamado `frase.txt` e conte quantas palavras existem nele. Depois, imprima o resultado no console.

**Passos:**

1.  Crie um arquivo chamado `frase.txt` com o seguinte conteúdo:
    ```
    JavaScript é uma linguagem de programação incrível para o desenvolvimento web e de servidores.
    ```
2.  No seu arquivo JavaScript (por exemplo, `contador.js`), use o método **`fs.readFile()`** para ler o conteúdo de `frase.txt`.
3.  Dentro da função de *callback*, pegue os dados lidos e use métodos de string para contar o número de palavras. Uma dica: você pode dividir a string em um array de palavras usando `.split(' ')`.
4.  Imprima a contagem final no console, como: `O arquivo tem 12 palavras.`.
5.  Não se esqueça de adicionar a lógica de tratamento de erro\!

-----

### **Exercício 2: Criando um Arquivo de Resumo**

**Objetivo:** Crie um programa que leia um arquivo de texto, transforme todo o seu conteúdo em letras maiúsculas e salve o resultado em um **novo arquivo**.

**Passos:**

1.  Crie um arquivo chamado `entrada.txt` com algum texto de sua escolha (por exemplo, "Este é um texto para ser transformado em maiúsculo.").
2.  No seu código, use **`fs.readFile()`** para ler o conteúdo de `entrada.txt`.
3.  Assim que a leitura for concluída, transforme a string para maiúsculas usando o método `.toUpperCase()`.
4.  Em seguida, use **`fs.writeFile()`** para criar um novo arquivo chamado `saida.txt` e escreva o texto transformado nele.
5.  Imprima uma mensagem de sucesso no console quando o novo arquivo for criado.

-----

### **Exercício 3: Adicionando uma Data ao Final de um Registro**

**Objetivo:** Crie um programa que simule a adição de uma entrada a um arquivo de log. O programa deve adicionar a data e a hora atuais, seguidas por uma mensagem, ao final de um arquivo chamado `log.txt`.

**Passos:**

1. Crie pelo explorador de arquivos um arquivo chamado `log.txt` com um conteudo em texto sobre uma reunião
2.  No seu código, use **`fs.appendFile()`** para adicionar uma nova linha ao arquivo `log.txt`.
3.  A linha a ser adicionada deve ter o formato: `[YYYY-MM-DD HH:mm:ss] Nova entrada de log.`
      * Você pode obter a data e hora atuais com `new Date()`.
4.  Garanta que cada nova entrada seja adicionada em uma linha separada (`\n`).
5.  Implemente o tratamento de erros para o caso de falha na escrita.