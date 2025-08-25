# Aula X - Principais Tags do HTML

HTML (HyperText Markup Language) é a linguagem usada para estruturar conteúdos na web. Nesta aula veremos algumas das principais tags utilizadas no dia a dia do desenvolvimento web.

---

## Estrutura Básica

De forma geral para a criação de uma nova página html podemos seguir essa estrutura

```html
<!DOCTYPE html>   <!-- Define o tipo do documento como HTML5 -->
<html>            <!-- Raiz do documento -->
  <head>          <!-- Cabeçalho com metadados -->
    <title>Minha Página</title> <!-- Título da aba -->
  </head>
  <body>          <!-- Corpo da página (conteúdo visível) -->
    ...
  </body>
</html>
```
### Estruturação do Conteúdo

| Tag         | Descrição                                      |
| ----------- | ---------------------------------------------- |
| `<header>`  | Cabeçalho da página ou seção                   |
| `<nav>`     | Navegação (menus, links principais)            |
| `<main>`    | Conteúdo principal da página                   |
| `<section>` | Seção de conteúdo                              |
| `<article>` | Artigo ou bloco independente                   |
| `<aside>`   | Conteúdo lateral ou complementar               |
| `<footer>`  | Rodapé da página ou seção                      |
| `<div>`     | Contêiner genérico (sem significado semântico) |

### Texto e Títulos
| Tag             | Descrição                             |
| --------------- | ------------------------------------- |
| `<h1>` a `<h6>` | Títulos (do mais importante ao menos) |
| `<p>`           | Parágrafo                             |
| `<br>`          | Quebra de linha                       |
| `<hr>`          | Linha horizontal/separadora           |
| `<strong>`      | Texto com ênfase forte (negrito)      |
| `<em>`          | Ênfase (itálico)                      |
| `<span>`        | Contêiner genérico para texto         |


### Links e Imagens
| Tag            | Descrição                   |
| -------------- | --------------------------- |
| `<a>`          | Hiperlink                   |
| `<img>`        | Imagem                      |
| `<figure>`     | Figura com legenda          |
| `<figcaption>` | Legenda da imagem ou figura |


### Listas
| Tag    | Descrição                           |
| ------ | ----------------------------------- |
| `<ul>` | Lista não ordenada (com marcadores) |
| `<ol>` | Lista ordenada (com números)        |
| `<li>` | Item de lista                       |
| `<dl>` | Lista de definição                  |
| `<dt>` | Termo definido                      |
| `<dd>` | Descrição do termo                  |

### Tabelas
| Tag         | Descrição           |
| ----------- | ------------------- |
| `<table>`   | Tabela              |
| `<thead>`   | Cabeçalho da tabela |
| `<tbody>`   | Corpo da tabela     |
| `<tr>`      | Linha da tabela     |
| `<th>`      | Célula de cabeçalho |
| `<td>`      | Célula de dados     |
| `<caption>` | Legenda da tabela   |


### Formulários
| Tag          | Descrição                 |
| ------------ | ------------------------- |
| `<form>`     | Formulário                |
| `<input>`    | Campo de entrada          |
| `<textarea>` | Área de texto             |
| `<button>`   | Botão                     |
| `<label>`    | Rótulo para campos        |
| `<select>`   | Menu suspenso             |
| `<option>`   | Opção do menu suspenso    |
| `<fieldset>` | Agrupamento de campos     |
| `<legend>`   | Título do grupo de campos |


### Mídia
| Tag        | Descrição                |
| ---------- | ------------------------ |
| `<audio>`  | Áudio                    |
| `<video>`  | Vídeo                    |
| `<source>` | Fonte de mídia           |
| `<track>`  | Legendas para vídeos     |
| `<iframe>` | Embutir páginas externas |

### Semântica e Meta-informação
| Tag        | Descrição                                    |
| ---------- | -------------------------------------------- |
| `<meta>`   | Metadados da página                          |
| `<title>`  | Título da página (na aba do navegador)       |
| `<link>`   | Ligação com arquivos externos (CSS, favicon) |
| `<style>`  | Estilos CSS embutidos                        |
| `<script>` | Scripts JavaScript                           |
