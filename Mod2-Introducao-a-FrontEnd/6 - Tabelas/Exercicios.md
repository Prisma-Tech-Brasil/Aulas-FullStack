# Exercicios

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