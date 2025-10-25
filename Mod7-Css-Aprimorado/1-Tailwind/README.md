# Framework Tailwind

O Tailwind CSS é um *framework* CSS que adota a filosofia "**Utility-First**" (Utilidade Primeiro). Isso significa que, em vez de fornecer componentes prontos (como um botão ou um card), ele oferece uma vasta coleção de classes de utilidade de propósito único que mapeiam diretamente para as propriedades CSS.

## Como o Tailwind CSS Funciona

### 1\. Utility-First (Utilidade Primeiro)

É o conceito central. Você estiliza elementos diretamente no seu HTML, aplicando múltiplas classes de utilidade. Cada classe geralmente faz uma coisa só e aplica uma única propriedade ou um conjunto pequeno de propriedades CSS.

**Exemplo:**
Em vez de escrever CSS assim:

```css
.card {
  padding: 1.5rem;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}
```

Você aplica as classes de utilidade diretamente no HTML:

```html
<div class="p-6 bg-white rounded-xl shadow-lg">
  </div>
```

Onde:

  * `p-6`: Aplica um *padding* (espaçamento interno) de $\text{1.5rem}$ em todos os lados.
  * `bg-white`: Define a cor de fundo como branco.
  * `rounded-xl`: Adiciona cantos arredondados grandes.
  * `shadow-lg`: Aplica uma sombra grande.

### 2\. Design System Integrado

O Tailwind vem com uma escala de valores pré-definida e consistente para coisas como espaçamento, cores, tamanhos de fonte, etc. Isso ajuda a garantir que o design do seu projeto seja consistente, mesmo quando você usa diversas classes.

  * **Cores:** `text-blue-500`, `bg-red-600` (o número indica a tonalidade).
  * **Espaçamento:** `m-4` (margem de $\text{1rem}$), `p-2` (padding de $\text{0.5rem}$).
  * **Tamanho da Fonte:** `text-xl`, `text-3xl`.

### 3\. Otimização e Purging

Na fase de desenvolvimento, o Tailwind gera um arquivo CSS muito grande com todas as utilidades possíveis. **No entanto**, para produção, ele utiliza uma ferramenta chamada **PurgeCSS** (ou o próprio motor de otimização do Tailwind) que **escaneia seu código** (HTML, JS, etc.) e remove *todas* as classes que **não foram usadas**.

O resultado final é um arquivo CSS leve, contendo apenas o que é estritamente necessário para o seu projeto, o que é um grande benefício para o desempenho.

-----

## Principais Conceitos

| Conceito | Explicação | Exemplo de Classe |
| :--- | :--- | :--- |
| **Classes de Utilidade** | Pequenas classes que mapeiam para uma única propriedade CSS, permitindo a construção de interfaces complexas diretamente no HTML. | `flex`, `text-center`, `m-4`, `bg-blue-500` |
| **Responsividade (Breakpoints)** | Permite aplicar estilos condicionalmente com base no tamanho da tela, usando prefixos para os *breakpoints* definidos. | `sm:text-left`, `lg:flex-row`, `xl:p-10` |
| **Modificadores de Estado** | Permite aplicar estilos em diferentes estados de um elemento, como *hover*, *focus*, etc. | `hover:bg-blue-700`, `focus:ring-2`, `active:scale-95` |
| **Customização** | O Tailwind é altamente customizável através do arquivo de configuração (`tailwind.config.js`), onde você pode estender a paleta de cores, espaçamentos, fontes, e muito mais. | Adicionar sua própria cor `primary` ao arquivo `tailwind.config.js` |
| **Diretivas** | Regras especiais do Tailwind usadas no seu arquivo CSS principal para injetar os estilos. | `@tailwind base;`, `@tailwind components;`, `@tailwind utilities;` |

-----

## Comandos Principais (no Terminal/CLI)

O Tailwind é geralmente usado em conjunto com ferramentas de construção (como PostCSS) em um projeto Node.js.

### 1\. Instalação (via npm/yarn)

Instala o Tailwind CSS e suas dependências principais.

```bash
npm install -D tailwindcss postcss autoprefixer
# ou
yarn add -D tailwindcss postcss autoprefixer
```

### 2\. Inicialização do Arquivo de Configuração

Cria o arquivo de configuração principal (`tailwind.config.js`) e um arquivo de configuração PostCSS (`postcss.config.js`).

```bash
npx tailwindcss init -p
```

### 3\. Configuração do Conteúdo

No arquivo **`tailwind.config.js`**, você precisa especificar onde o Tailwind deve procurar por classes para a otimização (**Purging**).

**`tailwind.config.js`**

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}", // Diz ao Tailwind para escanear esses arquivos
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### 4\. Injeção das Diretivas (CSS de Entrada)

Crie um arquivo CSS de entrada (ex: `src/input.css`) e adicione as diretivas do Tailwind. Este é o ponto de partida onde o Tailwind injetará todo o seu CSS.

**`src/input.css`**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 5\. Compilação do CSS

Comando para monitorar o arquivo de entrada e gerar o arquivo CSS final (`output.css`). O sinalizador `-w` (watch) é usado para desenvolvimento.

```bash
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
```

  * `-i`: Especifica o arquivo de **input** (entrada) com as diretivas.
  * `-o`: Especifica o arquivo de **output** (saída) que você vinculará ao seu HTML.
  * `--watch`: Monitora as alterações e recompila automaticamente.