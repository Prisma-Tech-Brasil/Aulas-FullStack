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


## Exercicios

### **Exercício 1: Tabela Básica de Cadastro de Alunos (Foco em Estrutura Simples)**

**Objetivo:** Criar uma tabela básica para organizar dados sem a utilização de seções de cabeçalho, corpo ou rodapé.

**Requisitos:**

1.  Crie um novo arquivo HTML chamado `cadastro.html`.
2.  Dentro da tag `<body>`, adicione um título `<h1>` com o texto "Registro de Alunos".
3.  Crie uma tabela (`<table>`) com 3 linhas e 2 colunas.
4.  **Primeira Linha (Cabeçalho informal):**
    * Célula 1: "Nome Completo"
    * Célula 2: "Matrícula"
5.  **Segunda Linha (Dados do Aluno 1):**
    * Célula 1: "Ana Silva"
    * Célula 2: "2023001"
6.  **Terceira Linha (Dados do Aluno 2):**
    * Célula 1: "Bruno Costa"
    * Célula 2: "2023002"

**Conceitos Aplicados:** `<table>`, `<tr>`, `<td>`.

---

### **Exercício 2: Tabela de Inventário de Loja (Foco em Semântica com Cabeçalho)**

**Objetivo:** Aplicar a estrutura semântica de cabeçalho e corpo (`<thead>` e `<tbody>`) para organizar o inventário de uma loja.

**Requisitos:**

1.  Crie um novo arquivo HTML chamado `inventario.html`.
2.  Crie uma tabela.
3.  Utilize a tag `<thead>` para definir o cabeçalho da tabela.
    * O cabeçalho deve ter uma linha (`<tr>`) com três células de cabeçalho (`<th>`): "ID do Produto", "Nome do Item", e "Estoque Atual".
4.  Utilize a tag `<tbody>` para o corpo da tabela e adicione os seguintes dados em duas linhas distintas:
    * **Linha 1:** ID: 001, Nome: Caderno Universitário, Estoque: 150
    * **Linha 2:** ID: 002, Nome: Caneta Azul, Estoque: 450
5.  Adicione um bloco de estilo (`<style>`) no `<head>` para garantir que a tabela tenha uma borda visível e as células de cabeçalho (`<th>`) tenham um fundo cinza claro (`background-color: #f0f0f0`).

**Conceitos Aplicados:** `<thead>`, `<tbody>`, `<th>`, Boas Práticas (Semântica).

---

### **Exercício 3: Tabela de Resumo Financeiro Mensal (Foco em Agrupamento e Mesclagem de Células)**

**Objetivo:** Utilizar as três seções de agrupamento (`<thead>`, `<tbody>`, `<tfoot>`) e o atributo `colspan` para criar uma linha de total que se estende por múltiplas colunas.

**Requisitos:**

1.  Crie um novo arquivo HTML chamado `financeiro.html`.
2.  Crie uma tabela com três colunas: "Descrição", "Tipo (Receita/Despesa)", "Valor (R$)".
3.  **Cabeçalho (`<thead>`):** Defina os nomes das colunas usando `<th>`.
4.  **Corpo (`<tbody>`):** Adicione no mínimo 3 linhas de dados, misturando receitas e despesas.
    * Exemplo: Salário (Receita, 3000), Aluguel (Despesa, 1200), Venda Extra (Receita, 500).
5.  **Rodapé (`<tfoot>`):** Crie uma linha para o total geral.
    * Nesta linha, a primeira célula deve conter o texto "Balanço Final".
    * Esta célula deve se estender por duas colunas usando o atributo **`colspan="2"`**.
    * A terceira célula deve conter o valor do balanço final (Receitas - Despesas). (Exemplo do cálculo acima: R$ 3000 + R$ 500 - R$ 1200 = R$ 2300).

**Conceitos Aplicados:** `<thead>`, `<tbody>`, `<tfoot>`, `colspan`.