
# 📚 Fundamentos do HTML na Web

## 🧠 O que é HTML?

HTML (HyperText Markup Language) é a **linguagem de marcação** usada para estruturar conteúdos da web. Ele **não é uma linguagem de programação**, mas uma linguagem de marcação.

**Exemplo simples:**

```html
<h1>Olá, mundo!</h1>
<p>Esse é o meu primeiro site!</p>
```

---

## 🧱 Estrutura básica de um arquivo HTML

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <title>Meu Site</title>
  </head>
  <body>
    <h1>Bem-vindo</h1>
    <p>Essa é a estrutura básica do HTML.</p>
  </body>
</html>
```

### Explicação:
- `<!DOCTYPE html>`: informa ao navegador que o documento é HTML5.
- `<html>`: raiz do documento.
- `<head>`: parte invisível (configurações, metadados, título).
- `<body>`: conteúdo visível do site.

---

## 🧩 Tags mais comuns e suas funções

| Tag             | Função                                     |
|------------------|----------------------------------------------|
| `<h1>` a `<h6>`  | Títulos (níveis de importância)              |
| `<p>`            | Parágrafo                                   |
| `<a>`            | Link (ancora)                                |
| `<img>`          | Imagem                                      |
| `<ul>`, `<ol>`, `<li>` | Listas (não ordenadas, ordenadas e itens) |
| `<div>`          | Contêiner genérico                          |
| `<span>`         | Texto em linha                              |
| `<br>`           | Quebra de linha                             |
| `<strong>`       | Texto em negrito (semântico)                |
| `<em>`           | Texto em itálico (semântico)                |

---

## 🔗 Exemplo com várias tags

```html
<h2>Sobre mim</h2>
<p>Meu nome é Ana, e eu sou <strong>desenvolvedora web</strong>.</p>
<img src="perfil.jpg" alt="Minha foto de perfil" />
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>
<a href="https://meusite.com">Visite meu portfólio</a>
```

---

## 🛑 Boas práticas

- Use sempre **tags semânticas** (`<main>`, `<section>`, `<article>`, etc.).
- Feche as tags corretamente.
- Escreva um código **indentado** (tabulação correta).
- Use o atributo `alt` em imagens.
- Use títulos de forma hierárquica (`<h1>` só uma vez por página, depois `<h2>`, `<h3>`...).

---

## 🔎 Onde aprender mais?
- [MDN Web Docs - HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [HTML Reference](https://htmlreference.io/)
- [Curso gratuito da W3Schools](https://www.w3schools.com/html/)

---

## ✍️ Exercício sugerido

Crie uma página HTML com:
- Um título principal (`<h1>`)
- Uma foto sua (`<img>`)
- Um parágrafo se apresentando
- Uma lista com suas 3 linguagens favoritas
- Um link para um site que você gosta
