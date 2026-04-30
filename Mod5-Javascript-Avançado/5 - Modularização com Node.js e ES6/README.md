# Node e Modulos

[Link da apresentação](https://1drv.ms/p/c/fcf1fd9b09dfae2f/ESTwyMs3-4dMie5TqClf4BkBWji_x7DAUT365V2qVDGkgQ?e=vAIuPZ)

O Node.js é um **ambiente de execução** (ou "runtime") de JavaScript de código aberto. Em poucas palavras, ele permite que você **execute código JavaScript fora do navegador**, ou seja, diretamente no seu computador ou servidor.

Antes do Node.js, o JavaScript era usado quase exclusivamente para tornar sites interativos. O Node mudou isso, levando o JavaScript para o mundo do **desenvolvimento de back-end**.

### Como o Node.js funciona?

O Node.js usa o mesmo motor JavaScript do Google Chrome, o **V8**. Esse motor é extremamente rápido e eficiente.

A grande inovação do Node é sua arquitetura **não-bloqueante e orientada a eventos**. Diferente de outras linguagens que lidam com requisições uma a uma, o Node pode processar várias tarefas ao mesmo tempo, sem que uma espere a outra terminar. Isso o torna ideal para aplicações que precisam lidar com muitas conexões simultâneas, como servidores de chat, APIs e serviços de streaming.

### Principais usos do Node.js

* **Servidores Web e APIs:** É a base para criar servidores que respondem a requisições de clientes (navegadores, aplicativos móveis, etc.).
* **Ferramentas de Linha de Comando (CLI):** Muitos pacotes de automação e ferramentas de desenvolvimento são feitos com Node.js (por exemplo, o próprio `npm` e o `npx`).
* **Aplicações de Tempo Real:** Perfeito para aplicações que precisam de comunicação constante entre cliente e servidor, como jogos online e chats.

### Por que ele é tão popular?

* **JavaScript em todo lugar:** Desenvolvedores podem usar a mesma linguagem (JavaScript) tanto para o front-end quanto para o back-end, o que simplifica o trabalho e permite reutilizar código.
* **Ecossistema NPM:** O Node.js vem com o **npm (Node Package Manager)**, o maior repositório de bibliotecas de código do mundo. Isso significa que você pode adicionar funcionalidades complexas ao seu projeto com um simples comando, como `npm install`.
* **Performance:** Sua arquitetura assíncrona o torna incrivelmente rápido e escalável.


## Modulos em NODE

Módulos são a forma como o Node.js organiza o código. Eles permitem que você divida seu código em arquivos separados, tornando-o mais fácil de gerenciar, reutilizar e depurar. Pense neles como caixas de ferramentas: você coloca um conjunto de funções e variáveis relacionadas em uma caixa (um módulo) e pode usar essa caixa em outros lugares.

Existem três tipos principais de módulos:

  * **Módulos Nativos (ou Core)**: São módulos que vêm embutidos com o Node.js. Você não precisa instalá-los, apenas importá-los para usar suas funcionalidades. Eles fornecem funcionalidades essenciais para o Node.js, como manipulação de arquivos, criação de servidores web e processamento de caminhos.

      * **Exemplos**: `fs` (File System), `http`, `path`, `os`.
      * **Como usar**: Você os importa usando a função `require()`.
        ```javascript
        const fs = require('fs');
        ```

    Veja mais em: https://www.w3schools.com/nodejs/nodejs_modules.asp

  * **Módulos Locais**: São módulos que você mesmo cria para organizar seu próprio projeto. Eles são úteis para evitar que seu arquivo principal se torne muito grande e confuso. Você pode criar um arquivo com funções específicas e depois importá-lo em outro arquivo. Veja em [Exemplos](Exemplos)

      * **Como criar**: Em um arquivo, você usa a palavra-chave `module.exports` para exportar o que deseja que fique disponível.
        ```javascript
        // Em um arquivo chamado 'calculadora.js'
        const somar = (a, b) => a + b;
        const subtrair = (a, b) => a - b;

        module.exports = {
          somar,
          subtrair
        };
        ```
      * **Como usar**: Você importa o módulo localmente, especificando o caminho do arquivo.
        ```javascript
        // Em outro arquivo, como 'app.js'
        const calculadora = require('./matematica.js');

        const resultado = matematica.somar(5, 3);
        console.log(resultado); // Saída: 8
        ```


  -----

  Aulas Futuras...
  
  * **Módulos NPM (Third-party)**: São módulos criados e compartilhados pela comunidade de desenvolvedores. Você pode encontrá-los no **NPM (Node Package Manager)**, que é um grande repositório de pacotes. Eles oferecem uma infinidade de funcionalidades, desde ferramentas para criar servidores web até bibliotecas para manipular datas.

      * **Como instalar**: Você usa o comando `npm install` no terminal. Por exemplo, para instalar a biblioteca **Express** (muito popular para criar servidores web):
        ```bash
        npm install express
        ```
      * **Como usar**: Após a instalação, você importa o módulo da mesma forma que os nativos.
        ```javascript
        const express = require('express');
        const app = express();
        ```

-----
