# Arquivos Estruturados de Dados (JSON, XML e CSV)

Arquivos estruturados de dados são aqueles que possuem um **formato bem definido e organizado**, facilitando o armazenamento, a manipulação e a análise por sistemas de computador. Eles são essenciais para o intercâmbio de dados e a integração entre diferentes aplicações.

Os três formatos mais comuns para esse fim, cada um com suas características, são:

| Formato | Sigla/Nome | Estrutura Principal | Principais Aplicações |
| :--- | :--- | :--- | :--- |
| **CSV** | Comma-Separated Values | **Tabelar (Linhas e Colunas)** | Planilhas, bases de dados simples, grandes volumes de dados tabulares. |
| **JSON** | JavaScript Object Notation | **Hierárquica (Chave-Valor)** | APIs Web (comunicação entre cliente e servidor), armazenamento NoSQL. |
| **XML** | eXtensible Markup Language | **Hierárquica (Tags e Elementos)** | Integração de sistemas legados, documentos complexos (ex: Nota Fiscal Eletrônica), validação rigorosa. |

---

### 1. CSV (Comma-Separated Values)

* **Natureza:** O formato mais simples e leve, representando dados em formato de **tabela**.
* **Estrutura:** É um arquivo de texto plano onde cada linha corresponde a um registro, e os valores (campos) dentro de cada linha são separados por um caractere delimitador (geralmente vírgula ou ponto e vírgula).
* **Vantagens:** Excelente para exportação e importação em programas de planilhas e para lidar com grandes volumes de dados devido à sua **alta compactação e simplicidade**.

### 2. JSON (JavaScript Object Notation)

* **Natureza:** Um formato de intercâmbio de dados **leve e legível por humanos**.
* **Estrutura:** Utiliza uma estrutura hierárquica baseada em **pares chave-valor** (objetos) e listas (arrays), modelando a forma como dados são representados em muitas linguagens de programação.
* **Vantagens:** É o formato padrão na maioria das **APIs Web** e serviços REST. É mais compacto e rápido de processar por máquinas em comparação com o XML. É considerado um formato **semiestruturado**, pois embora tenha uma estrutura, ela pode ser mais flexível que a de um banco de dados relacional.

### 3. XML (eXtensible Markup Language)

* **Natureza:** Uma linguagem de marcação que define regras para codificar documentos de forma legível por humanos e por máquinas.
* **Estrutura:** Utiliza uma estrutura **hierárquica (em árvore)** com tags de abertura e fechamento para definir elementos e atributos, permitindo a descrição de estruturas de dados complexas e aninhadas.
* **Vantagens:** Possui um foco maior na **estrutura e validação** (usando XSD ou DTD), tornando-o ideal para transferência segura e formal de dados entre sistemas, como em documentos governamentais ou industriais. É mais detalhado (*verbose*) que o JSON.