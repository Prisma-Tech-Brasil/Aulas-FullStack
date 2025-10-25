## Instalação do Tailwind CSS em um Projeto React com Vite

Este guia assume que você já tem um projeto React com Vite configurado.

### 1\. Instalar Dependências

Abra o terminal na raiz do seu projeto e execute o seguinte comando para instalar o Tailwind CSS e suas dependências de produção:

```bash
npm install -D tailwindcss postcss autoprefixer
# OU
yarn add -D tailwindcss postcss autoprefixer
```

### 2\. Gerar Arquivos de Configuração

Execute este comando para gerar os arquivos de configuração necessários: `tailwind.config.js` e `postcss.config.js`.

```bash
npx tailwindcss init -p
```

### 3\. Configurar os Caminhos dos Templates

Abra o arquivo gerado **`tailwind.config.js`** e configure a propriedade `content` para incluir todos os arquivos que podem conter classes do Tailwind CSS (como seus componentes React e o HTML principal):

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### 4\. Adicionar as Diretivas Tailwind

Abra o seu arquivo CSS principal (geralmente **`./src/index.css`** ou **`./src/App.css`**) e adicione as diretivas do Tailwind no início do arquivo. **Remova qualquer CSS padrão do Vite/React** que possa estar nele:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Você pode adicionar seu CSS customizado abaixo, se precisar */
```

### 5\. Iniciar o Servidor de Desenvolvimento

Agora você pode iniciar seu projeto. O Vite, com a ajuda do PostCSS e do Autoprefixer, fará a compilação do Tailwind.

```bash
npm run dev
# OU
yarn dev
```

### 6\. Começar a Usar

Você já pode começar a usar as classes utilitárias do Tailwind CSS nos seus componentes React\!

**Exemplo em um componente (e.g., `App.jsx`):**

```jsx
function App() {
  return (
    <div className="text-center p-8 bg-blue-500 text-white">
      <h1 className="text-3xl font-bold underline">
        Olá, Tailwind!
      </h1>
      <button className="mt-4 px-4 py-2 bg-white text-blue-500 rounded hover:bg-gray-100">
        Clique-me
      </button>
    </div>
  )
}
```