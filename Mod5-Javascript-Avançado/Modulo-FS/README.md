# Modulo FS (File System)

O módulo **`fs`** (File System) do Node.js permite interagir com o sistema de arquivos do seu computador, ou seja, ler, escrever, criar, atualizar e excluir arquivos e diretórios. Ele oferece duas formas principais de realizar essas operações: **síncrona** e **assíncrona**.

  * **Síncrona:** O código espera a operação terminar para continuar a execução. É mais fácil de usar, mas pode "travar" o programa se a operação demorar muito.
  * **Assíncrona:** A operação é executada em segundo plano, e o código continua a rodar. Quando a operação termina, uma função de *callback* é executada. Essa é a forma mais recomendada, especialmente para servidores web, pois não bloqueia outras requisições. O módulo `fs` também possui versões que utilizam **Promises**, que são uma forma mais moderna e limpa de lidar com operações assíncronas.

A seguir, um resumo passo a passo com exemplos para suas aulas.

-----

### **Passo 1: Importar o Módulo**

O primeiro passo é sempre importar o módulo `fs` para seu arquivo JavaScript.

```javascript
const fs = require('fs');
```

-----

### **Passo 2: Ler um Arquivo**

Para ler um arquivo, a forma mais comum é usar a função assíncrona `fs.readFile()`.

```javascript
// Exemplo Assíncrono com Callback
fs.readFile('caminho/do/seu/arquivo.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Ocorreu um erro ao ler o arquivo:', err);
    return;
  }
  console.log('Conteúdo do arquivo:', data);
});
```

  * O primeiro argumento é o caminho do arquivo.
  * O segundo argumento (`'utf8'`) é a codificação para que o texto não apareça como dados binários.
  * O terceiro argumento é a função de *callback*, que recebe um erro (`err`) e os dados lidos (`data`).

-----

### **Passo 3: Escrever em um Arquivo**

Para escrever ou criar um arquivo, você pode usar a função `fs.writeFile()`. Se o arquivo não existir, ela o cria; se existir, ela sobrescreve o conteúdo.

```javascript
// Exemplo Assíncrono com Callback
const conteudo = 'Olá, mundo! Este é um texto de exemplo.';

fs.writeFile('caminho/do/novo_arquivo.txt', conteudo, (err) => {
  if (err) {
    console.error('Ocorreu um erro ao escrever no arquivo:', err);
    return;
  }
  console.log('Arquivo salvo com sucesso!');
});
```

  * O primeiro argumento é o caminho do arquivo.
  * O segundo argumento é a string que será escrita.
  * O terceiro é a função de *callback* para tratar erros.

-----

### **Passo 4: Adicionar Conteúdo a um Arquivo**

Para adicionar conteúdo ao final de um arquivo sem sobrescrevê-lo, use a função `fs.appendFile()`.

```javascript
// Exemplo Assíncrono com Callback
const novoConteudo = '\nEsta é uma nova linha adicionada ao arquivo.';

fs.appendFile('caminho/do/seu/arquivo.txt', novoConteudo, (err) => {
  if (err) {
    console.error('Ocorreu um erro ao adicionar conteúdo:', err);
    return;
  }
  console.log('Conteúdo adicionado com sucesso!');
});
```

-----

### **Passo 5: Outras Operações Comuns**

Aqui estão outras operações úteis do módulo `fs` que você pode incluir:

#### **Verificar se um Arquivo Existe**

Use `fs.existsSync()` para verificar de forma síncrona.

```javascript
if (fs.existsSync('caminho/do/seu/arquivo.txt')) {
  console.log('O arquivo existe!');
} else {
  console.log('O arquivo não existe.');
}
```

#### **Excluir um Arquivo**

Use `fs.unlink()` para remover um arquivo.

```javascript
fs.unlink('caminho/do/arquivo_a_ser_excluido.txt', (err) => {
  if (err) {
    console.error('Ocorreu um erro ao excluir o arquivo:', err);
    return;
  }
  console.log('Arquivo excluído com sucesso!');
});
```

#### **Criar um Diretório**

Use `fs.mkdir()` para criar uma nova pasta.

```javascript
fs.mkdir('caminho/para/nova_pasta', { recursive: true }, (err) => {
  if (err) {
    console.error('Ocorreu um erro ao criar o diretório:', err);
    return;
  }
  console.log('Diretório criado com sucesso!');
});
```

-----

### **Exemplo Adicional: Usando Promises (forma mais moderna)**

Para trabalhar com o módulo `fs` de forma assíncrona usando **Promises** (que evitam o "inferno de callbacks"), é recomendado usar `fs.promises`.

```javascript
const fsPromises = require('fs').promises;

async function lerArquivoAsync() {
  try {
    const data = await fsPromises.readFile('caminho/do/seu/arquivo.txt', 'utf8');
    console.log('Conteúdo do arquivo (Promises):', data);
  } catch (err) {
    console.error('Ocorreu um erro ao ler o arquivo:', err);
  }
}

lerArquivoAsync();
```
