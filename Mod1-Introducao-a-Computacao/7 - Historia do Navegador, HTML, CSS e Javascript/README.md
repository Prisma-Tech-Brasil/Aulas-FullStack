# Aula 1 - História do Navegador, HTML, CSS e Javascript

## Como funciona um navegador?

O navegador (ex.: Chrome, Firefox, Edge) é um software que o usuário usa para acessar sites.

### Função principal:
**Interpretar e exibir o conteúdo de páginas web**, que são compostas de HTML, CSS e JavaScript.

### Como ele faz isso?
1. O usuário digita um endereço (URL).
2. O navegador envia uma **requisição HTTP** para o servidor onde o site está hospedado.
3. O servidor devolve uma **resposta**, geralmente com arquivos HTML, CSS e JS.
4. O navegador lê esses arquivos e monta visualmente o site na tela.

---
## O que é o protocolo HTTP e HTTPS?

Quando você acessa um site, como www.exemplo.com, seu navegador precisa se comunicar com o servidor onde esse site está hospedado. Essa comunicação segue um conjunto de regras chamado protocolo. É aí que entram o HTTP e o HTTPS.

### HTTP (HyperText Transfer Protocol)

O HTTP é o protocolo responsável por transferir dados entre o navegador (cliente) e o servidor web. Ele permite que páginas, textos, imagens, vídeos e outros recursos sejam carregados na sua tela.

Porém, o HTTP não criptografa os dados transmitidos. Isso significa que qualquer informação enviada ou recebida — como senhas, mensagens ou dados pessoais — pode ser interceptada por terceiros durante o tráfego, especialmente em redes públicas.

### HTTPS (HyperText Transfer Protocol Secure)

O HTTPS é a versão segura do HTTP. Ele utiliza criptografia SSL/TLS para proteger os dados que trafegam entre o navegador e o servidor. Assim, mesmo que alguém intercepte a comunicação, não conseguirá entender ou modificar as informações transmitidas.

Além disso, o HTTPS garante que:

- Você está se conectando ao site verdadeiro (autenticidade),

- Os dados estão criptografados (privacidade),

- E não foram alterados no caminho (integridade).

## Como surgiram os protocolos HTTP e HTTPS?
### A origem do HTTP

O HTTP (HyperText Transfer Protocol) surgiu no início dos anos 1990, criado por Tim Berners-Lee, o mesmo inventor do HTML e da World Wide Web. Ele precisava de um protocolo simples e eficiente para permitir que navegadores acessassem e exibissem documentos hospedados em servidores pela internet.

Assim o HTTP foi criado para viabilizar a comunicação entre cliente (navegador) e servidor, transmitindo documentos de forma padronizada, rápida e legível, usando texto simples. Era perfeito para a web nascente da época.

A primeira versão do HTTP, conhecida como HTTP/0.9, foi lançada em 1991. Era extremamente simples: apenas permitia requisições de arquivos HTML. Com o tempo, o protocolo evoluiu para suportar métodos como GET, POST, PUT, DELETE e cabeçalhos mais complexos, chegando ao HTTP/1.0 (1996) e depois ao HTTP/1.1 (1997), que se tornou um padrão amplamente adotado.

### A necessidade de segurança: o surgimento do HTTPS

Com o crescimento da internet, o HTTP começou a mostrar suas fragilidades — especialmente na segurança. Todas as informações trafegavam em texto puro, o que significa que qualquer pessoa conectada à mesma rede poderia interceptar e ler dados como senhas, e-mails ou números de cartão de crédito.

Para resolver isso, surgiu o HTTPS (HTTP Secure) — uma combinação do protocolo HTTP com uma camada de criptografia baseada no SSL (Secure Sockets Layer), que depois evoluiu para o TLS (Transport Layer Security).

O HTTPS foi introduzido oficialmente em 1994, inicialmente usado apenas em sites de bancos e e-commerce. Com o tempo, tornou-se cada vez mais comum e, hoje, é o padrão obrigatório para qualquer site que lide com dados de usuários.

## Como surgiu o HTML?

O HTML, sigla para HyperText Markup Language, foi desenvolvido em 1991 por Tim Berners-Lee, um cientista britânico que trabalhava no CERN, na Suíça. Na época, havia uma necessidade crescente de compartilhar informações e documentos científicos entre pesquisadores de forma mais eficiente. Pensando nisso, Tim criou o HTML como uma linguagem simples e estruturada, capaz de conectar documentos por meio de hiperlinks e torná-los acessíveis pela internet — nascendo assim a base da World Wide Web como conhecemos hoje.

### Função do HTML:
Criar a **estrutura básica de uma página web**.

Ele permite adicionar:
- Títulos
- Parágrafos
- Imagens
- Links
- Listas
- Tabelas

