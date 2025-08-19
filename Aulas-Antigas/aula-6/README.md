
# 🎨 Aula de Introdução ao CSS

## ✅ O que vamos aprender nesta aula?

- O que é CSS e por que usá-lo
- Como aplicar CSS (inline, interno e externo)
- O que são seletores
- Conceito de propriedade e valor
- Propriedades básicas de estilo

---

## 🧾 1) O que é CSS?

CSS significa **Cascading Style Sheets** (Folhas de Estilo em Cascata).  
É a linguagem usada para **estilizar** elementos HTML: cores, fontes, tamanhos, espaçamentos, posicionamentos e mais.

Enquanto o **HTML** cria a estrutura da página, o **CSS** cuida da aparência.

---

## 🧩 2) Como aplicar CSS

Existem três formas de usar CSS em uma página:

### 1. Inline (dentro da tag HTML):
```html
<p style="color: red;">Texto em vermelho</p>
```

### 2. Interno (dentro da tag `<style>` no `<head>`):
```html
<head>
  <style>
    p {
      color: red;
    }
  </style>
</head>
```

### 3. Externo (arquivo separado `.css`):
```html
<link rel="stylesheet" href="estilos.css" />
```
```css
/* No arquivo estilos.css */
p {
  color: red;
}
```

---

## 🔎 3) O que são Seletores?

Seletores são usados para escolher **quais elementos HTML** você quer estilizar.

Exemplos:
- `p` → todos os parágrafos
- `h1` → todos os títulos principais
- `.classe` → todos os elementos com uma classe específica
- `#id` → um elemento com um ID específico

```css
/* Todos os parágrafos */
p {
  color: blue;
}

/* Todos os elementos com classe 'destaque' */
.destaque {
  font-weight: bold;
}
```

---

## 🧠 4) Propriedade e Valor

No CSS usamos a seguinte estrutura:

```
propriedade: valor;
```

Exemplo:
```css
p {
  color: green;
  font-size: 18px;
}
```

---

## 🎯 5) Propriedades Básicas

| Propriedade        | O que faz                          | Exemplo                   |
|--------------------|------------------------------------|---------------------------|
| `color`            | Cor do texto                       | `color: blue;`            |
| `background-color` | Cor de fundo                       | `background-color: black;`|
| `font-size`        | Tamanho da fonte                   | `font-size: 20px;`        |
| `text-align`       | Alinhamento do texto               | `text-align: center;`     |
| `padding`          | Espaço interno do elemento         | `padding: 10px;`          |
| `margin`           | Espaço externo do elemento         | `margin: 20px;`           |
| `border`           | Adiciona borda ao elemento         | `border: 1px solid gray;` |

---

## ✅ Conclusão da aula

- O CSS permite deixar sua página muito mais agradável e bonita.
- Você pode aplicá-lo de várias formas.
- Usar bem os seletores e entender propriedade-valor é essencial para estilização eficiente.
