# Projeto Servidor com Express

Para colocar esse servidor HTTPS com Express para rodar no seu computador de forma prática, vamos criar um projeto do zero.

Aqui está o passo a passo detalhado de quais arquivos criar, para que servem e o código necessário para cada um.

---

### Passo 1: Preparando a pasta do projeto

Primeiro, você precisa criar uma pasta no seu computador onde o projeto vai ficar e inicializar o Node.js.

1. Abra o seu terminal (Prompt de Comando, PowerShell ou Terminal do VS Code).
2. Crie uma nova pasta e entre nela:
```bash
mkdir meu-servidor-seguro
cd meu-servidor-seguro
```


3. Inicialize o projeto Node.js executando:
```bash
npm init -y
```


* **O que isso faz?** Esse comando cria automaticamente um arquivo chamado `package.json`. Ele serve como o "manual de instruções" do seu projeto, guardando o nome, a versão e a lista de bibliotecas (como o Express) que seu projeto vai precisar para funcionar.



---

### Passo 2: Instalando o Express

No mesmo terminal, instale o framework Express:

```bash
npm install express
```

* **O que isso faz?** Cria uma pasta chamada `node_modules` (onde ficam os códigos do Express) e atualiza o seu `package.json` registrando que o Express agora é uma dependência do projeto.

---

### Passo 3: Gerando os Certificados SSL/TLS (Chave e Certificado)

Para o protocolo HTTPS funcionar, o servidor **obrigatoriamente** precisa de dois arquivos: a **Chave Privada** e o **Certificado**. Como estamos apenas testando no computador local (localhost), podemos gerar certificados "autoassinados".

Se você estiver no **Linux** ou **macOS** (ou usando o Git Bash no Windows), você pode gerar esses arquivos rodando este comando no terminal:

```bash
openssl req -nodes -new -x509 -keyout server.key -out server.cert
```

*(Pode apertar Enter para pular as perguntas sobre país, empresa, etc., que aparecerem no terminal).*

Isso vai criar dois arquivos na sua pasta:

1. `server.key`: É a sua **Chave Privada**. Pense nela como a chave secreta que só o seu servidor conhece para decodificar as mensagens que os clientes enviam. **Nunca a compartilhe**.
2. `server.cert`: É o seu **Certificado Digital**. É o documento que o servidor envia para o navegador do usuário provando quem ele é e fornecendo a chave pública para criptografar os dados.

> ⚠️ **Nota para Windows:** Se o comando `openssl` não funcionar no seu prompt padrão, a forma mais fácil de testar HTTPS localmente hoje em dia é instalando uma ferramenta chamada `mkcert`, ou gerando os arquivos online em sites de ferramentas de desenvolvimento apenas para fins de teste local.

---

### Passo 4: Criando o arquivo do Servidor

Agora, crie um arquivo chamado **`server.js`** na raiz da sua pasta. Você pode criá-lo pelo VS Code ou pelo bloco de notas. Esse arquivo será o coração do seu servidor.

Cole o seguinte código detalhado dentro do `server.js`:

```javascript
// 1. IMPORTAÇÃO DOS MÓDULOS
// O Express nos ajuda a criar as rotas (URLs) de forma simples.
const express = require('express');

// O módulo 'https' é nativo do Node.js e serve para criar canais de comunicação criptografados.
const https = require('https');

// O módulo 'fs' (File System) é nativo e serve para o Node conseguir ler arquivos do computador.
const fs = require('fs');

// 2. CONFIGURAÇÃO DO EXPRESS
const app = express();

// Criamos uma rota do tipo GET. Quando alguém acessar https://localhost:3000/ esta função roda.
app.get('/', (req, res) => {
    res.send('<h1>Conexão Segura! 🔒</h1><p>Seu servidor Express está rodando via HTTPS com sucesso.</p>');
});

// Criamos outra rota de exemplo para simular uma API de usuários
app.get('/api/usuarios', (req, res) => {
    res.json([
        { id: 1, nome: 'Ana' },
        { id: 2, nome: 'Carlos' }
    ]);
});

// 3. CARREGANDO OS CERTIFICADOS DE SEGURANÇA
// Usamos o fs.readFileSync para ler o conteúdo dos arquivos que geramos no Passo 3.
const credenciais = {
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
};

// 4. INICIALIZANDO O SERVIDOR HTTPS
// Passamos os certificados e as configurações do Express para o servidor HTTPS nativo.
const PORTA = 3000;
https.createServer(credenciais, app).listen(PORTA, () => {
    console.log(`\n🚀 Servidor HTTPS rodando em: https://localhost:${PORTA}`);
});
```

---

### Passo 5: Rodando o projeto

De volta ao terminal, execute o comando para ligar o seu servidor:

```bash
node server.js
```

Você verá a mensagem no terminal: `🚀 Servidor HTTPS rodando em: https://localhost:3000`.

### Passo 6: Testando no Navegador (O "Aviso de Segurança")

Abra o seu navegador e digite exatamente: **`https://localhost:3000`** (não esqueça do **s** no https).

**O que vai acontecer?**
O seu navegador vai exibir uma tela de aviso vermelha ou amarela dizendo: *"Sua conexão não é privada"* ou *"Certificado Inválido"*.

**Por que isso acontece?**
Lembra que no Passo 3 nós criamos um certificado "autoassinado"? Como fomos nós mesmos que criamos e não uma autoridade certificadora oficial da internet (como a *Let's Encrypt*), o navegador desconfia.

**Como prosseguir?**
Isso é perfeitamente normal em ambiente de desenvolvimento. Para testar, basta clicar em **"Avançado"** e depois em **"Ir para localhost (inseguro)"** ou **"Aceitar o risco e continuar"**. Pronto! Você verá a mensagem do seu servidor Express rodando sob o protocolo HTTPS criptografado.