# Animações CSS - Exemplo de Aula

## 📚 **Objetivo da Aula**
Na aula de hoje, aprendemos como criar animações e transições em CSS, aplicando efeitos simples de carregamento de página e interatividade em botões.

## 🔥 **O que foi abordado:**
1. **Animação de Carregamento:**
   - Criamos um **loader** simples que aparece ao carregar a página, usando a propriedade `@keyframes` para rotacionar um círculo e fornecer um efeito visual de carregamento.
   - Utilizamos a técnica de **mostrar e ocultar o conteúdo da página** após 1 segundo usando JavaScript (`setTimeout`), com a mudança de propriedades de `display` do loader e do conteúdo da página.

2. **Transições em Botões:**
   - Criamos transições suaves ao passar o mouse sobre os botões, utilizando a propriedade `transition` no CSS para animar a mudança de cor e o aumento de escala (`transform: scale`), proporcionando um efeito interativo e atraente.

3. **JavaScript para Controle de Exibição do Conteúdo:**
   - Implementamos um pequeno script JavaScript para garantir que o conteúdo da página seja exibido apenas após o término da animação de carregamento.

## ⚙️ **Código Utilizado:**
O código CSS foi utilizado para criar animações e transições, enquanto o JavaScript foi usado para controlar a visibilidade do conteúdo após o carregamento da página.

### Exemplo de Loader:
```css
.loader {
  width: 50px;
  height: 50px;
  border: 5px solid #ccc;
  border-top-color: #333;
  border-radius: 50%;
  margin: 20% auto;
  animation: spin 1s linear infinite;
}
