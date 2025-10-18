

# Fundamentos do React: JSX e Componentes

### 1\. Componentes: Os Blocos de Construção

No React, um **Componente** é a unidade básica de construção de uma interface. Pense neles como funções que recebem entradas (**Props**) e retornam o que deve aparecer na tela (elementos React).

**Conceitos Chave:**

  * **Reutilização:** Um componente de botão pode ser usado em 10 lugares diferentes da aplicação.
  * **Isolamento:** Cada componente gerencia seu próprio código, lógica e aparência, facilitando a manutenção.
  * **Tipos de Componentes:** Atualmente, focamos nos **Componentes Funcionais** (funções JavaScript) que usam **Hooks** para adicionar funcionalidade.

#### Estrutura Básica de um Componente Funcional:

```jsx
// src/components/MeuBotao.jsx

import React from 'react'; // Não é estritamente obrigatório no React 17+, mas é boa prática

// 1. É uma função JavaScript
const MeuBotao = () => {

  // 2. Ele retorna JSX (o que será renderizado)
  return (
    <button className="meu-estilo">
      Clique Aqui!
    </button>
  );
};

// 3. Permite que o componente seja usado em outros arquivos
export default MeuBotao;
```

-----

### 2\. JSX (JavaScript XML): HTML no JavaScript

O **JSX** é a extensão de sintaxe que o React usa para descrever a aparência da interface. Essencialmente, é uma forma de escrever *marcação* (parecida com HTML) dentro dos arquivos JavaScript.

#### 2.1. Regras Fundamentais do JSX

| Regra | Descrição | Exemplo |
| :--- | :--- | :--- |
| **Sempre Feche as Tags**| Tags vazias (como `<img>` ou `<input>`) **devem** ser fechadas com uma barra (`/`). | `<img src="..." />` |
| **Elemento Raiz Único** | O `return` de um componente **deve** ter apenas um elemento pai. Se precisar agrupar vários elementos, use um `<div>` ou o `Fragment` (`<>...</>`). | ` jsx return ( <> <h1>Olá!</h1> <p>Corpo</p> </> );  ` |
| **Atributos de Classe** | O atributo `class` do HTML deve ser escrito como **`className`** no JSX. | `<div className="minha-classe">...</div>` |
| **camelCase em Atributos**| A maioria dos atributos HTML escritos com hífen (como `tab-index` ou `on-click`) devem ser escritos em `camelCase` no JSX (ex: `tabIndex`, `onClick`).| `<input type="text" tabIndex={0} />` |

#### 2.2. Inserindo Lógica JavaScript no JSX

A verdadeira mágica do JSX é a capacidade de **misturar código JavaScript** diretamente na marcação.

Para inserir qualquer expressão JavaScript (variáveis, funções, cálculos) no seu JSX, você usa **chaves simples `{}`**.

| Tipo de Lógica | Exemplo no JSX | Explicação |
| :--- | :--- | :--- |
| **Variáveis** | `<h1>Olá, {nomeUsuario}!</h1>` | Exibe o valor da variável `nomeUsuario`. |
| **Funções/Eventos** | `<button onClick={minhaFuncao}>...</button>` | A função `minhaFuncao` é executada ao clicar. |
| **Condicionais (Ternário)**| ` jsx {estaLogado ? <LogoutButton /> : <LoginButton />}  `| Se `estaLogado` for `true`, exibe o primeiro componente, senão exibe o segundo. |
| **Listas (Map)** | ` jsx <ul> {lista.map((item) => ( <li key={item.id}>{item.texto}</li> ))} </ul>  `| Itera sobre um array (`lista`) e cria um elemento JSX para cada item. |

**Exemplo Prático (Componente que usa Lógica):**

```jsx
const Saudacao = () => {
  const nome = "Alunos de React";
  const anoAtual = new Date().getFullYear();

  return (
    <div>
      {/* Usando variáveis e expressões dentro de chaves */}
      <h2>Bem-vindos, {nome}!</h2>

      <p>Estamos no ano de {anoAtual}.</p>

      {/* Exemplo de condicional simples */}
      {anoAtual > 2024 && (
        <p>Já estamos no futuro!</p>
      )}

    </div>
  );
};
```