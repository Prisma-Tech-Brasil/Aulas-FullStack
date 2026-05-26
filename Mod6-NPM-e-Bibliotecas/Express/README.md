## O que dá para fazer com uma API Express?

Antes do código, vale a pena entender onde você pode aplicar isso. Uma API (Interface de Programação de Aplicações) serve como a ponte entre o seu banco de dados e o mundo exterior (como um aplicativo de celular, um site ou outro sistema). Exemplos práticos:

* **Sistema de Autenticação:** Cadastro de usuários, login e geração de tokens de acesso (JWT).
* **E-commerce:** Rotas para listar produtos, adicionar itens ao carrinho e processar pedidos.
* **Gerenciador de Tarefas (To-Do List):** Criar, ler, atualizar e deletar tarefas (o famoso CRUD).
* **Integrações:** Uma API que recebe dados do WhatsApp e salva no seu sistema, ou que consulta a previsão do tempo e envia um e-mail.

---

## Passo a Passo Didático

### Passo 1: Preparando o terreno

Crie uma pasta para o seu projeto no computador, abra o terminal dentro dessa pasta e inicialize um projeto Node.js:

```bash
npm init -y

```

> **Por que fazer isso?** Esse comando cria um arquivo chamado `package.json`. Ele é o "RG" do seu projeto, onde ficam registradas as configurações e as dependências (bibliotecas) que você vai instalar.

Agora, instale o Express:

```bash
npm install express

```

> **Por que fazer isso?** Isso baixa o código do Express para dentro da pasta `node_modules` e o adiciona como dependência no seu `package.json`.

---

### Passo 2: O Código Estrutural Mínimo

Crie um arquivo chamado `index.js` (ou `app.js`) na raiz do projeto e coloque o seguinte código básico:

```javascript
// 1. Importando o módulo do Express
const express = require('express');

// 2. Inicializando o aplicativo Express
const app = express();

// 3. Definindo a porta onde o servidor vai rodar
const PORT = 3000;

// 4. Criando a primeira rota (Rota Raiz)
app.get('/', (req, res) => {
    res.send('Olá! Minha API está funcionando com sucesso.');
});

// 5. Ligando o servidor para ouvir as requisições
app.listen(PORT, () => {
    console.log(`Servidor rodando perfeitamente na porta ${PORT}`);
});

```

#### Explicando cada parte:

* `require('express')`: Traz as ferramentas do Express para o seu arquivo.
* `app = express()`: Cria uma instância do servidor. É a partir desse `app` que você vai definir tudo o que a API faz.
* `app.get('/', ...)`: Diz ao servidor: "Quando alguém acessar o endereço principal (`/`) usando o método **GET**, execute esta função".
* `(req, res)`: **req** (request/requisição) traz os dados de quem está chamando a API. **res** (response/resposta) é o objeto que você usa para enviar algo de volta. `res.send()` envia um texto simples.
* `app.listen(...)`: Deixa o seu servidor "de pé", esperando conexões na porta 3000.

Para testar, vá ao terminal e digite: `node index.js`. Depois, abra o seu navegador e acesse `http://localhost:3000`.

---

### Passo 3: Como alterar para cada tipo de situação (Os Métodos HTTP)

Em APIs, nós usamos os métodos HTTP para indicar a intenção da requisição. Vamos simular uma API de **Produtos**.

Antes de criar as rotas, adicione esta linha logo abaixo de `const app = express();`:

```javascript
app.use(express.json());

```

> **Por que fazer isso?** Por padrão, o Express não entende JSON (o formato de dados mais usado em APIs) no corpo das requisições. Essa linha avisa ao Express: "Se chegar um JSON, transforme-o em um objeto JavaScript para mim".

#### Situação A: Quero LISTAR dados (Método GET)

Usado para buscar informações. Não altera nada no servidor.

```javascript
// Dados simulados (fingindo que vieram de um banco de dados)
const produtos = [
    { id: 1, nome: 'Teclado Mecânico', preco: 250 },
    { id: 2, nome: 'Mouse Gamer', preco: 150 }
];

// Rota para listar todos os produtos
app.get('/produtos', (req, res) => {
    res.json(produtos); // Retorna a lista em formato JSON
});

```

#### Situação B: Quero ENVIAR novos dados para salvar (Método POST)

Usado para criar um novo registro (um novo usuário, um novo produto).

```javascript
app.post('/produtos', (req, res) => {
    // Pegando os dados enviados pelo cliente no corpo (body) da requisição
    const novoProduto = req.body; 
    
    // Gerando um ID simples para o novo produto
    novoProduto.id = produtos.length + 1;
    
    // Adicionando na nossa lista simulada
    produtos.push(novoProduto);
    
    // Retornando o produto criado com o status 211 (Created)
    res.status(201).json(novoProduto);
});

```

> **Como alterar para sua situação:** Se você estivesse criando um sistema de usuários, aqui você pegaria `req.body.email` e `req.body.senha` para validar e salvar.

#### Situação C: Quero ATUALIZAR dados existentes (Método PUT)

Usado para modificar um registro que já existe. Aqui precisamos saber *qual* item alterar, usando um parâmetro na URL (`:id`).

```javascript
app.put('/produtos/:id', (req, res) => {
    const idParametro = parseInt(req.params.id); // Captura o ID vindo na URL
    const { nome, preco } = req.body; // Captura os novos dados enviados
    
    // Procura o produto na nossa lista
    const produto = produtos.find(p => p.id === idParametro);
    
    if (!produto) {
        return res.status(404).json({ mensagem: 'Produto não encontrado' });
    }
    
    // Atualiza os dados
    produto.nome = nome;
    produto.preco = preco;
    
    res.json({ mensagem: 'Produto atualizado com sucesso!', produto });
});

```

> **Como alterar para sua situação:** O `req.params.id` serve para qualquer busca específica. Se quisesse buscar um usuário pelo CPF, a rota seria `/usuarios/:cpf` e você usaria `req.params.cpf`.

#### Situação D: Quero DELETAR dados (Método DELETE)

Usado para remover um registro. Também precisa do ID para saber quem deletar.

```javascript
app.delete('/produtos/:id', (req, res) => {
    const idParametro = parseInt(req.params.id);
    
    // Filtra a lista mantendo apenas os produtos que NÃO têm o ID informado
    const listaAtualizada = produtos.filter(p => p.id !== idParametro);
    
    res.json({ mensagem: 'Produto removido com sucesso (simulado)' });
});

```

---

## Resumo de como adaptar a API para o seu cenário:

1. **Mudança de Tema (Ex: De produtos para Clientes):** Altere o nome das rotas de `/produtos` para `/clientes` e adapte os campos do `req.body` (ex: `req.body.nome`, `req.body.telefone`).
2. **Tratamento de Erros:** Use os **Status HTTP** corretos. `200` para sucesso, `201` para algo criado, `400` se o usuário enviou dados errados, `404` se algo não foi encontrado e `500` se deu erro no seu código.
3. **Evolução:** Conforme seu projeto crescer, você trocará esses arrays na memória (como a constante `produtos`) por comandos que salvam e buscam dados em bancos reais (como MongoDB, PostgreSQL ou MySQL).

Qual tipo de projeto específico você está pensando em construir com essa API? Se quiser, podemos adaptar esse esqueleto juntos para a sua ideia!