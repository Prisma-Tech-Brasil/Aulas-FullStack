# Recursos do Bootstrap com Exemplos

## O que é o Bootstrap?

> O **Bootstrap** é um framework front-end para criar sites responsivos de forma rápida, usando **HTML, CSS e JavaScript**.

### Principais vantagens:

* Sistema de **grid responsivo**
* **Componentes prontos** de interface
* **Classes utilitárias** para estilização rápida
* **Compatível com navegadores modernos**
* **Fácil personalização** com Sass e variáveis

---

## Layout e Grid System

O **sistema de grid** é o coração do Bootstrap. Ele divide a página em linhas (`.row`) e colunas (`.col`).

### Estrutura básica:

```html
<div class="container">
  <div class="row text-center">
    <div class="col-md-4 bg-primary text-white p-3">Coluna 1</div>
    <div class="col-md-4 bg-success text-white p-3">Coluna 2</div>
    <div class="col-md-4 bg-danger text-white p-3">Coluna 3</div>
  </div>
</div>
```

### Dicas:

* Use `.container` para centralizar o conteúdo.
* Use `.container-fluid` para ocupar 100% da largura.
* Colunas se ajustam automaticamente em telas menores.

---

## Tipografia e Texto

O Bootstrap fornece várias classes para estilizar textos rapidamente.

### Exemplo:

```html
<p class="lead">Texto em destaque com a classe .lead.</p>
<p class="fw-bold text-primary">Texto em negrito e azul.</p>
<p class="text-center text-muted">Texto centralizado e acinzentado.</p>
```

### Classes úteis:

| Função        | Exemplo                                    |
| ------------- | ------------------------------------------ |
| Peso da fonte | `.fw-bold`, `.fw-light`                    |
| Cor do texto  | `.text-primary`, `.text-danger`            |
| Alinhamento   | `.text-start`, `.text-center`, `.text-end` |
| Tamanho       | `.fs-1` a `.fs-6`                          |

---

## Formulários

Formulários no Bootstrap vêm com estilos modernos e consistentes.

### Exemplo:

```html
<form class="w-50 mx-auto">
  <div class="mb-3">
    <label for="nome" class="form-label">Nome</label>
    <input type="text" class="form-control" id="nome" placeholder="Digite seu nome">
  </div>
  <div class="mb-3">
    <label for="email" class="form-label">Email</label>
    <input type="email" class="form-control" id="email" placeholder="exemplo@email.com">
  </div>
  <button type="submit" class="btn btn-primary">Enviar</button>
</form>
```

### Classes úteis:

| Função                   | Classe                                   |
| ------------------------ | ---------------------------------------- |
| Campo de entrada         | `.form-control`                          |
| Rótulo                   | `.form-label`                            |
| Espaçamento entre campos | `.mb-3`                                  |
| Botões                   | `.btn`, `.btn-primary`, `.btn-outline-*` |

---

## Componentes de Interface

O Bootstrap vem com vários **componentes prontos** para uso.

### Alerta:

```html
<div class="alert alert-warning">⚠️ Este é um alerta!</div>
```

### Card:

```html
<div class="card w-50">
  <div class="card-body">
    <h5 class="card-title">Título do Card</h5>
    <p class="card-text">Exemplo de conteúdo dentro de um card Bootstrap.</p>
    <a href="#" class="btn btn-primary">Saiba mais</a>
  </div>
</div>
```

### Accordion:

```html
<div class="accordion" id="demoAccordion">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
        Seção 1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show">
      <div class="accordion-body">Conteúdo da primeira seção.</div>
    </div>
  </div>
</div>
```

---

## Utilitários (Helpers)

As **classes utilitárias** ajudam a ajustar espaçamento, cor, tamanho e alinhamento.

### 🔧 Exemplos:

```html
<div class="p-3 mb-2 bg-dark text-white text-center rounded shadow">
  Caixa com padding, fundo escuro, texto branco e sombra.
</div>

<div class="d-flex justify-content-around">
  <div class="bg-info p-3">Item 1</div>
  <div class="bg-warning p-3">Item 2</div>
  <div class="bg-danger p-3">Item 3</div>
</div>
```

### Classes populares:

| Tipo                   | Exemplos                              |
| ---------------------- | ------------------------------------- |
| Espaçamento            | `m-3`, `p-4`, `mt-5`                  |
| Cores                  | `bg-primary`, `text-danger`           |
| Display                | `d-flex`, `d-none`, `d-grid`          |
| Borda / Arredondamento | `border`, `rounded`, `rounded-circle` |
| Sombras                | `shadow`, `shadow-lg`                 |

---

## Componentes JavaScript (Interativos)

Alguns componentes precisam do JavaScript do Bootstrap para funcionar.

### Modal:

```html
<button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#demoModal">
  Abrir Modal
</button>

<div class="modal fade" id="demoModal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Exemplo de Modal</h5>
        <button class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">
        <p>Este é um exemplo de modal interativo do Bootstrap.</p>
      </div>
      <div class="modal-footer">
        <button class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
      </div>
    </div>
  </div>
</div>
```

### Outros componentes JS:

* Dropdown (`data-bs-toggle="dropdown"`)
* Collapse / Accordion
* Tooltip (`data-bs-toggle="tooltip"`)
* Toasts (notificações flutuantes)
* Carousel (slides automáticos)

---

## Ícones (Bootstrap Icons)

Para usar ícones oficiais do Bootstrap:

### Adicione no `<head>`:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css">
```

### Exemplo:

```html
<i class="bi bi-alarm fs-3 text-danger"></i>
<i class="bi bi-heart-fill fs-3 text-danger"></i>
```

---

## Personalização e Temas

Você pode **personalizar o Bootstrap** alterando variáveis Sass ou CSS.

### Exemplos de variáveis (em SCSS):

```scss
$primary: #0d6efd;
$secondary: #6c757d;
$success: #198754;
```

💡 Também é possível:

* Criar temas claros/escuros
* Definir novos breakpoints
* Usar cores personalizadas com `:root` e CSS custom properties

---

## Recursos e Referências

| Tipo                 | Link                                                                                     |
| -------------------- | ---------------------------------------------------------------------------------------- |
| Documentação oficial | [https://getbootstrap.com](https://getbootstrap.com)                                     |
| Bootstrap Icons      | [https://icons.getbootstrap.com](https://icons.getbootstrap.com)                         |
| Temas oficiais       | [https://themes.getbootstrap.com](https://themes.getbootstrap.com)                       |
| Exemplos prontos     | [https://getbootstrap.com/docs/5.3/examples](https://getbootstrap.com/docs/5.3/examples) |

---


---

Quer que eu transforme esse conteúdo em um **slide Markdown para apresentação (formato Marp ou Reveal.js)** com divisões automáticas e títulos para projetar em sala?
