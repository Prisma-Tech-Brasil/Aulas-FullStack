### Exercício 1: Gerenciador de Arquivos Simples

**Objetivo:** Criar, escrever e ler um arquivo de log usando as versões síncronas dos módulos `fs` e `path`.

1.  Crie uma pasta chamada `projeto-fs`.
2.  Crie o arquivo `app.js` dentro dela.
3.  Importe os módulos `fs` e `path`.
4.  Use `path.join()` para criar uma variável `caminhoDoArquivo` que aponta para um arquivo chamado `log.txt`.
5.  Use **`fs.writeFileSync()`** para escrever a string "Este é um log de teste." no arquivo `log.txt`.
6.  Use **`fs.readFileSync()`** para ler o conteúdo do arquivo. Lembre-se de passar `'utf-8'` como segundo argumento para que o conteúdo seja uma string.
7.  Imprima o conteúdo lido no console.

---

### Exercício 2: Servidor HTTP Básico

**Objetivo:** Montar um servidor que responda de forma diferente dependendo da URL acessada. Este exercício não tem uma versão síncrona porque a natureza do servidor HTTP é assíncrona (ele precisa esperar por requisições). O código abaixo já é o mais simples possível para essa tarefa.

1.  Crie uma pasta chamada `servidor-web`.
2.  Crie o arquivo `index.js`.
3.  Importe os módulos `http` e `url`.
4.  Crie um servidor HTTP usando `http.createServer((req, res) => { ... })`.
5.  Dentro do servidor, use `url.parse()` para extrair o caminho (`pathname`) da URL da requisição.
6.  Use uma estrutura `if/else` para verificar o caminho:
    * Se for `/`, responda com a mensagem "Página inicial".
    * Se for `/sobre`, responda com a mensagem "Página sobre nós".
    * Se for qualquer outra coisa, defina o status da resposta para `404` e responda com "Página não encontrada".
7.  Faça o servidor escutar na porta 3000 usando `server.listen()`.

---

### Exercício 3: Relatório de Informações do Sistema

**Objetivo:** Gerar um arquivo de log que armazena informações sobre o sistema operacional usando operações síncronas.

1.  Crie uma pasta chamada `sys-info`.
2.  Crie o arquivo `gerar-relatorio.js`.
3.  Importe os módulos `fs` e `os`.
4.  Obtenha as seguintes informações do sistema usando as funções do módulo `os`:
    * `os.hostname()`
    * `os.type()`
    * `os.release()`
5.  Crie uma string com as informações formatadas (por exemplo, "Hostname: [valor]\n Tipo: [valor] ...").
6.  Use **`fs.writeFileSync()`** para salvar essa string em um novo arquivo chamado `relatorio.txt`.
7.  Imprima uma mensagem de sucesso no console, como "Relatório gerado com sucesso!".
