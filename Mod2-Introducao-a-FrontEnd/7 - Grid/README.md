
# CSS Grid Layout

O **CSS Grid Layout** (ou simplesmente **Grid**) é um sistema de layout bidimensional que permite organizar o conteúdo em **linhas** e **colunas**. É ideal para layouts de página mais complexos e para estruturar grandes áreas.

## 1. Conceitos Fundamentais

| Termo | Descrição |
| :--- | :--- |
| **Container Grid** | O elemento pai onde o `display: grid;` é aplicado. Ele define o contexto da grade. |
| **Itens Grid** | Os filhos diretos do Container Grid. Eles são posicionados dentro da grade. |
| **Linhas de Grade (Grid Lines)** | As linhas divisórias que formam a estrutura horizontal e vertical da grade. Elas são numeradas. |
| **Trilhas de Grade (Grid Tracks)** | Os espaços entre duas Linhas de Grade, ou seja, as colunas e as linhas. |
| **Célula de Grade (Grid Cell)** | A interseção de uma linha e uma coluna, a menor unidade do Grid. |
| **Área de Grade (Grid Area)** | Uma área retangular formada por múltiplas células de grade. |
| **Unidade `fr` (Fraction)** | Uma unidade de medida flexível e responsiva específica do Grid. Representa uma fração do espaço livre no container. |

## 2. Propriedades Chave do Container Grid

As propriedades a seguir são aplicadas ao elemento pai (`<div>` ou outro) com `display: grid;`:

| Propriedade | Exemplo | Descrição |
| :--- | :--- | :--- |
| `display` | `display: grid;` | Transforma o elemento em um Container Grid de nível de bloco. |
| `grid-template-columns` | `grid-template-columns: 1fr 2fr 100px;` | Define o número e a largura das colunas. |
| `grid-template-rows` | `grid-template-rows: 50px auto 1fr;` | Define o número e a altura das linhas. |
| `grid-template-areas` | `grid-template-areas: "h h h" "n m a" "f f f";` | Permite definir o layout usando nomes de áreas, visualmente (exige a prop. `grid-area` nos itens). |
| `gap` | `gap: 10px;` | Define o espaçamento (gutter) entre as células. (Shorthand para `row-gap` e `column-gap`). |
| `justify-content` | `justify-content: center;` | Alinha o grid inteiro (horizontalmente) dentro do container. |
| `align-content` | `align-content: center;` | Alinha o grid inteiro (verticalmente) dentro do container. |

## 3. Propriedades Chave dos Itens Grid

As propriedades a seguir são aplicadas aos elementos filhos do Container Grid:

| Propriedade | Exemplo | Descrição |
| :--- | :--- | :--- |
| `grid-column-start` / `grid-column-end` | `grid-column-start: 1; grid-column-end: 3;` | Define em qual Linha de Grade a coluna do item começa/termina. |
| `grid-column` | `grid-column: 1 / span 2;` | Shorthand para coluna: começa na Linha 1 e ocupa 2 colunas. |
| `grid-row-start` / `grid-row-end` | `grid-row-start: 2; grid-row-end: 4;` | Define em qual Linha de Grade a linha do item começa/termina. |
| `grid-row` | `grid-row: 2 / 3;` | Shorthand para linha: começa na Linha 2 e termina na Linha 3. |
| `grid-area` | `grid-area: header;` | Atribui um nome ao item para ser usado com `grid-template-areas`. |
| `justify-self` | `justify-self: end;` | Alinha um item específico na célula (horizontalmente). |
| `align-self` | `align-self: start;` | Alinha um item específico na célula (verticalmente). |

## 4. Diferença com Flexbox

| Recurso | CSS Grid | CSS Flexbox |
| :--- | :--- | :--- |
| **Dimensão** | Bidimensional (Linhas e Colunas ao mesmo tempo) | Unidimensional (Linhas **ou** Colunas) |
| **Uso Ideal** | Layout de página (estrutura geral) | Componentes (navegação, listas, alinhamentos simples) |
| **Conteúdo vs. Layout**| *Layout-first* (estrutura definida antes) | *Content-first* (se adapta ao conteúdo) |

**Conclusão para sua aula:** O CSS Grid é uma ferramenta extremamente poderosa para criar layouts **responsivos** e complexos de forma mais intuitiva, permitindo posicionar itens precisamente em duas dimensões (linhas e colunas).