# Containers em HTML 

## O que são *Containers*?

Em **HTML**, *containers* são **elementos que agrupam ou envolvem outros elementos**, ajudando a organizar e estruturar o conteúdo da página. Eles **não possuem conteúdo visual próprio**, mas servem para aplicar estilos, criar seções e manter a hierarquia do layout.

---

## Tipos de Containers

### 1. `<div>` – Container Genérico

- **Significado:** "divisão"
- **Uso:** Agrupamento genérico de elementos, sem valor semântico.
- **Exemplo:**

```html
<div class="card">
  <h2>Título</h2>
  <p>Conteúdo do card</p>
</div>
```

### 2. Containers Semânticos (HTML5)

Esses elementos também são containers, mas com significado semântico. Eles indicam o tipo de conteúdo que armazenam

| Tag         | Função                                    |
| ----------- | ----------------------------------------- |
| `<header>`  | Cabeçalho da página ou seção              |
| `<main>`    | Conteúdo principal da página              |
| `<section>` | Seção genérica de conteúdo                |
| `<article>` | Conteúdo independente (ex: post, notícia) |
| `<aside>`   | Conteúdo complementar/lateral             |
| `<footer>`  | Rodapé da página ou seção                 |
| `<nav>`     | Menu de navegação                         |

### Por que usar Containers?

- Organização do conteúdo

- Aplicação de estilos com CSS

- Reutilização de estruturas

- Melhoria da semântica e acessibilidade (com tags adequadas)

### Dica prática

Use `<div>` apenas quando nenhuma outra tag semântica for apropriada.

Prefira containers semânticos para tornar seu HTML mais legível e acessível.