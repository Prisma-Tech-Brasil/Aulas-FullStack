# Fundamentos de React

Este documento cobre os fundamentos de React, com foco em componentes, props e estilos inline. Ideal para quem está começando a aprender React ou quer reforçar conceitos básicos.

---

## Criando um Projeto React com Vite

1. **Inicie um novo projeto React usando Vite:**
   ```bash
   npm create vite@latest my-react-app --template react
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

4. Acesse o navegador no endereço indicado (geralmente `http://localhost:5173`).

---

## Componentes

### O Que São Componentes?
Componentes são blocos reutilizáveis de código que representam partes da interface do usuário. Eles ajudam a dividir a aplicação em pequenas partes independentes e manutenção.

### Criando um Componente Funcional
1. Crie um arquivo chamado `Header.jsx` dentro de uma pasta `components`:
   ```jsx
   function Header() {
     return (
       <header>
         <h1>Meu Primeiro Componente!</h1>
       </header>
     );
   }

   export default Header;
   ```

2. Importe e utilize o componente no arquivo `App.jsx`:
   ```jsx
   import Header from './components/Header';

   function App() {
     return (
       <div>
         <Header />
       </div>
     );
   }

   export default App;
   ```

---

## Props (Propriedades)

### O Que São Props?
Props permitem passar dados dinâmicos para os componentes, tornando-os reutilizáveis e personalizados.

### Exemplo de Uso de Props
1. Atualize o componente `Header` para aceitar uma prop chamada `title`:
   ```jsx
   function Header({ title }) {
     return (
       <header>
         <h1>{title}</h1>
       </header>
     );
   }

   export default Header;
   ```

2. Passe um valor para a prop ao utilizar o componente:
   ```jsx
   function App() {
     return (
       <div>
         <Header title="Bem-vindo ao Mundo do React!" />
       </div>
     );
   }

   export default App;
   ```

Agora, o texto do componente `Header` será dinâmico.

---

## Estilos Inline em JSX

### Como Funciona?
No React, os estilos podem ser aplicados diretamente aos elementos HTML usando o atributo `style`. O valor de `style` é um objeto JavaScript onde as propriedades CSS são escritas em camelCase.

### Exemplo
1. Adicione estilos inline ao componente `Header`:
   ```jsx
   function Header({ title }) {
     return (
       <header style={{ backgroundColor: '#282c34', color: 'white', padding: '20px', textAlign: 'center' }}>
         <h1>{title}</h1>
       </header>
     );
   }

   export default Header;
   ```

### Observações
- Use camelCase para nomes de propriedades CSS (ex.: `backgroundColor` em vez de `background-color`).
- Valores numéricos podem ser usados diretamente (ex.: `padding: 20`), mas strings são necessárias para cores e outros valores textuais.

---

## Conclusão

Neste guia, aprendemos:
- Como criar um projeto React utilizando o Vite.
- O conceito de componentes e sua implementação.
- Como usar props para passar dados dinâmicos.
- Aplicar estilos inline em JSX.

Nos próximos passos, abordaremos estados e eventos para tornar os componentes mais interativos!