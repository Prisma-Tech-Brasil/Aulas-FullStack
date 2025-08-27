# Aula 1 - Introducao ao Javascript

## O que é?

O JavaScript é uma linguagem de programação de alto nível, interpretada e multiparadigma. Ele é a espinha dorsal de quase todas as páginas da internet, tornando-as interativas e dinâmicas.

Pense no seguinte:

- O HTML é a estrutura (o esqueleto) de uma página web, definindo o conteúdo.

- O CSS é a aparência (a roupa), responsável pelo design e estilo.

- O JavaScript é a interatividade (o comportamento), adicionando ações e animações.

Com JavaScript, você pode criar elementos que respondem a ações do usuário, como:

- Menus suspensos que se abrem e fecham.

- Formulários que validam os dados antes de enviar.

- Animações e carrosséis de imagens.

- Jogos diretamente no navegador.

Ele não se limita apenas a navegadores. O JavaScript também é usado para desenvolver aplicações de back-end (com Node.js), aplicativos mobile e até mesmo softwares para o computador

## História

O JavaScript foi criado em 1995 por Brendan Eich, na Netscape Communications Corporation. Ele foi desenvolvido em apenas 10 dias e, inicialmente, foi chamado de Mocha e depois LiveScript.

A mudança para JavaScript foi uma jogada de marketing. Na época, a linguagem Java estava em alta, e a Netscape queria capitalizar essa popularidade. Apesar do nome, o JavaScript e o Java são linguagens completamente diferentes, com sintaxes, filosofias e aplicações distintas.

Com o tempo, o JavaScript se tornou um padrão e foi submetido à ECMA International para padronização. A versão mais conhecida e utilizada hoje é a ECMAScript, que é o nome técnico para o padrão da linguagem. As atualizações anuais, como ES6 (também conhecida como ECMAScript 2015), trouxeram recursos modernos que transformaram o JavaScript em uma linguagem robusta e poderosa.

## Como rodar?
A grande vantagem do JavaScript é que ele roda em qualquer lugar onde há um navegador web. Você pode executar seu código de três maneiras principais:

### Diretamente no navegador
Você pode abrir as ferramentas de desenvolvedor (geralmente com F12 ou Ctrl+Shift+I) e ir até o console. Lá, você pode digitar código JavaScript e executá-lo imediatamente para testar funções rápidas ou manipular a página atual.

### Incorporado no HTML
Essa é a forma mais comum de usar JavaScript em uma página web. Você pode incluir o código diretamente na sua página HTML de duas maneiras:

Usando a tag `<script>`:
``` HTML
<script>
  alert('Olá, Mundo!');
</script>
```

Vinculando um arquivo externo:
``` HTML
<script src="meu_script.js"></script>
```
Essa é a abordagem recomendada, pois separa o comportamento da página (JavaScript) da sua estrutura (HTML), tornando o código mais organizado e fácil de manter.

### Com Node.js
Para rodar JavaScript fora do navegador, você usa o Node.js. Ele é um ambiente de execução que permite que você execute código JavaScript no seu computador, como se fosse um programa de linha de comando. Isso é fundamental para desenvolver aplicações de back-end, ferramentas de automação e scripts do lado do servidor.

Para usar o Node.js, você precisa:

1. Baixar e instalar o Node.js em seu computador.

2. Abrir o terminal ou prompt de comando.

3. Executar um arquivo JavaScript com o comando node:
``` Bash
$ node meu_script.js
```

E você verá a saída do seu código diretamente no terminal.