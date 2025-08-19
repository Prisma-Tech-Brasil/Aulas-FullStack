
# Aula: Tabelas no HTML

Este resumo aborda os conceitos fundamentais sobre tabelas no HTML, incluindo sua importância, tipos e boas práticas.

---

## **1. Importância das Tabelas no HTML**

Tabelas organizam dados em linhas e colunas, facilitando a leitura e a análise de informações. Embora não sejam mais usadas para layout, continuam essenciais para exibição de dados estruturados, como relatórios e calendários.

---

## **2. Evolução das Tabelas**

- **Antes**: Usadas para estruturar o layout de páginas.
- **Agora**: Exclusivamente para dados tabulares, com o CSS assumindo a estilização.

---

## **3. Tipos de Tabelas**

### **3.1. Tabelas Básicas**
Estrutura simples com linhas (`<tr>`) e células (`<td>`).
```html
<table>
  <tr>
    <td>Nome</td>
    <td>Idade</td>
  </tr>
  <tr>
    <td>João</td>
    <td>30</td>
  </tr>
</table>
```

### **3.2. Tabelas com Cabeçalho**
Adiciona cabeçalhos com a tag `<th>` para melhor compreensão.
```html
<table>
  <thead>
    <tr>
      <th>Produto</th>
      <th>Preço</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Café</td>
      <td>R$10</td>
    </tr>
  </tbody>
</table>
```

### **3.3. Tabelas Agrupadas**
Permitem dividir dados em seções usando `<thead>`, `<tbody>` e `<tfoot>`.
```html
<table>
  <thead>
    <tr>
      <th>Item</th>
      <th>Quantidade</th>
      <th>Preço</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Maçã</td>
      <td>5</td>
      <td>R$15</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="2">Total</td>
      <td>R$15</td>
    </tr>
  </tfoot>
</table>
```

---

## **4. Boas Práticas**

1. **Acessibilidade**: Use atributos como `scope` e `headers` para relacionar células e cabeçalhos.
2. **Semântica**: Utilize `<thead>`, `<tbody>` e `<tfoot>` para organização.
3. **CSS**: Prefira estilizar tabelas com CSS ao invés de atributos HTML.

---

## **5. Exemplo Completo**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tabelas no HTML</title>
  <style>
    table {
      border-collapse: collapse;
      width: 100%;
    }
    th, td {
      border: 1px solid #ddd;
      padding: 8px;
    }
    th {
      background-color: #f4f4f4;
      text-align: left;
    }
  </style>
</head>
<body>
  <h1>Exemplo de Tabelas</h1>
  <h2>Tabela Agrupada</h2>
  <table>
    <thead>
      <tr>
        <th>Item</th>
        <th>Quantidade</th>
        <th>Preço</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Maçã</td>
        <td>5</td>
        <td>R$15</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="2">Total</td>
        <td>R$15</td>
      </tr>
    </tfoot>
  </table>
</body>
</html>
```
