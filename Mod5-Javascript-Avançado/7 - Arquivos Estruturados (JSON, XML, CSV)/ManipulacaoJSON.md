# Manipulação de JSON no JavaScript

JSON (**J**ava**S**cript **O**bject **N**otation) é o formato padrão para intercâmbio de dados na web. Ele é leve, fácil de ler para humanos e simples para máquinas processarem.

## 1. Estrutura do JSON
O JSON é composto por pares de **chave: valor**. Diferente dos objetos JavaScript literais, o JSON possui regras rígidas:
* As chaves devem estar entre **aspas duplas** (`"key"`).
* Strings devem usar **aspas duplas**.
* Não são permitidas funções ou comentários.
* Tipos suportados: String, Number, Object, Array, Boolean e Null.

```json
{
  "usuario": "Guilherme",
  "idade": 25,
  "estaAtivo": true,
  "habilidades": ["JavaScript", "Node.js"],
  "endereco": {
    "cidade": "Vitória",
    "uf": "ES"
  }
}
```



---

## 2. Manipulação Interna (Global JSON Object)
Independentemente do ambiente, o JavaScript usa dois métodos principais para converter dados:

* **`JSON.parse(string)`**: Converte uma string JSON em um objeto JavaScript.
* **`JSON.stringify(objeto)`**: Converte um objeto JavaScript em uma string JSON (útil para enviar dados para um servidor).

---

## 3. No Navegador (Client-side)
No front-end, a manipulação geralmente envolve buscar dados de uma API ou de um arquivo local no servidor.

### Importar (Ler)
Usamos a **Fetch API**, que é baseada em Promises.
```javascript
async function carregarDados() {
  const resposta = await fetch('config.json');
  const dados = await resposta.json(); // Transforma o corpo da resposta em objeto
  console.log(dados);
}
```

### Exportar (Enviar/Salvar)
Para enviar para um servidor, usamos o método `POST`:
```javascript
async function enviarDados(objetoJS) {
  await fetch('https://api.exemplo.com/dados', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(objetoJS) // Converte para string antes de enviar
  });
}
```

---

## 4. No Node.js (Server-side)
No servidor, temos acesso direto ao sistema de arquivos (**File System**).

### Importar (Ler)
Existem duas formas principais:

**A. Via `require` (Síncrono):**
Ideal para arquivos de configuração pequenos.
```javascript
const dados = require('./dados.json');
console.log(dados.nome);
```

**B. Via módulo `fs` (Assíncrono - Recomendado):**
Melhor para performance em aplicações reais.
```javascript
const fs = require('fs').promises;

async function lerJson() {
  const conteudo = await fs.readFile('dados.json', 'utf-8');
  const dados = JSON.parse(conteudo);
  return dados;
}
```

### Exportar (Escrever)
Para salvar dados em um arquivo `.json`:
```javascript
const fs = require('fs').promises;

async function salvarJson(objetoJS) {
  const jsonString = JSON.stringify(objetoJS, null, 2); // O '2' formata com indentação
  await fs.writeFile('saida.json', jsonString);
}
```



---

## Resumo de Diferenças

| Característica | Navegador | Node.js |
| :--- | :--- | :--- |
| **Leitura** | `fetch()` (via rede/URL) | `fs.readFile` ou `require` |
| **Escrita** | Geralmente via API (POST/PUT) | `fs.writeFile` (direto no disco) |
| **Segurança** | Restrito por CORS | Acesso total ao sistema de arquivos |
| **Formato** | String JSON | String JSON ou Módulo (require) |