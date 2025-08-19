
# 📝 Exercícios Práticos de Responsividade

## 🎯 Objetivo
Praticar os conceitos de responsividade, utilizando técnicas como media queries, unidades de medida relativas, Flexbox e Grid Layout.

---

## **Exercício 1: Ajuste de Layout com Media Queries**

**Descrição:**  
Crie uma página HTML com um layout básico e adicione uma media query que altere o fundo da página de acordo com o tamanho da tela.

### Requisitos:
1. O fundo deve ser azul em telas com largura maior que 768px.
2. O fundo deve ser amarelo em telas com largura menor ou igual a 768px.

<details>
<summary><strong>HTML Inicial:</strong></summary>

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <title>Exercício 1</title>
</head>
<body>
  <h1>Minha Página Responsiva</h1>
</body>
</html>
```
</details>

---

## **Exercício 2: Layout Responsivo com Flexbox**

**Descrição:**  
Crie um layout com 3 caixas alinhadas horizontalmente. Em telas menores que 768px, as caixas devem ser alinhadas verticalmente.

### Requisitos:
1. Alinhar as caixas horizontalmente em telas grandes.
2. Alinhar as caixas verticalmente em telas menores.

<details>
<summary><strong>HTML Inicial:</strong></summary>

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <title>Exercício 2</title>
</head>
<body>
  <div class="container">
    <div class="box">Caixa 1</div>
    <div class="box">Caixa 2</div>
    <div class="box">Caixa 3</div>
  </div>
</body>
</html>
```
</details>

---

## **Exercício 3: Grid Layout Responsivo**

**Descrição:**  
Crie um layout com 4 caixas que se ajustem em 2 colunas em telas maiores que 768px e 1 coluna em telas menores.

### Requisitos:
1. Usar Grid Layout para alinhar as caixas.
2. Alterar o número de colunas com media queries.

<details>
<summary><strong>HTML Inicial:</strong></summary>

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <title>Exercício 3</title>
</head>
<body>
  <div class="grid-container">
    <div class="box">Caixa 1</div>
    <div class="box">Caixa 2</div>
    <div class="box">Caixa 3</div>
    <div class="box">Caixa 4</div>
  </div>
</body>
</html>
```
</details>

---

## **Exercício 4: Unidades Relativas**

**Descrição:**  
Crie uma página onde todos os tamanhos de fonte e elementos sejam definidos com unidades relativas (`em`, `rem`, `%`, `vw`, `vh`).

### Requisitos:
1. A fonte principal deve usar `rem`.
2. A largura dos elementos deve ser definida em `%`.
3. O tamanho das imagens deve ser ajustado com `max-width: 100%`.

---

## **Exercício 5: Desafio - Página Completa Responsiva**

**Descrição:**  
Crie uma página de portfólio pessoal com as seguintes seções:
1. **Cabeçalho** com o nome e uma breve descrição.
2. **Seção de Projetos** com imagens que se ajustem ao tamanho da tela.
3. **Rodapé** com links para redes sociais.

### Requisitos:
- O layout deve ser responsivo, adaptando-se bem a dispositivos móveis e desktops.
- Utilize Flexbox e/ou Grid para organizar as seções.
- Adicione uma media query para ajustar o layout em telas menores que 768px.

**Dica:** Experimente aplicar cores, margens e paddings para melhorar a aparência do layout!

---

## 📌 **Entrega**

Envie o link do repositório com os arquivos ou o zip contendo o código dos exercícios para revisão.

---

**Bons estudos! 🚀**
