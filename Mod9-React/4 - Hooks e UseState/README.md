
# Hooks e `useState` no React

## O que são Hooks?

  * **Definição:** Hooks são funções especiais do React que permitem que você "engate" ou "ligue" os recursos de **estado** e **ciclo de vida** do React a partir de **componentes funcionais**.
  * **Propósito:** Eles foram introduzidos na versão 16.8 do React para permitir o uso de funcionalidades que antes eram exclusivas de componentes de classe (como estado e métodos de ciclo de vida) em componentes baseados em funções.
  * **Regras Básicas:**
    1.  **Apenas no Topo:** Chame Hooks apenas no nível mais alto de seus componentes funcionais. Não os chame dentro de *loops*, condições ou funções aninhadas.
    2.  **Apenas em Funções React:** Chame Hooks apenas a partir de componentes funcionais do React ou de seus próprios **Custom Hooks**.
  * **Convenção de Nomenclatura:** Todos os Hooks pré-definidos do React (e também os Custom Hooks) começam com o prefixo `use` (ex: `useState`, `useEffect`, `useContext`).

-----

## Como usar o Hook `useState`

O `useState` é o Hook mais fundamental e serve para adicionar **estado local** a componentes funcionais.

### 1\. Importação

Você precisa importá-lo do React:

```javascript
import React, { useState } from 'react';
// ou simplesmente
// import { useState } from 'react';
```

### 2\. Sintaxe

Ele é chamado dentro do seu componente funcional. O `useState` recebe um **valor inicial** como argumento e retorna um *array* com exatamente dois elementos, que geralmente são desestruturados:

```javascript
const [nomeDoEstado, funcaoDeAtualizacao] = useState(valorInicial);
```

| Elemento | Descrição |
| :--- | :--- |
| `nomeDoEstado` | A variável que armazena o **valor atual** do estado. |
| `funcaoDeAtualizacao` | Uma função para **atualizar** o valor do estado. Ao chamá-la, o React irá **re-renderizar** o componente com o novo valor. |
| `valorInicial` | O valor com o qual o estado será inicializado (pode ser qualquer tipo: número, *string*, booleano, objeto, *array*, etc.). |

### 3\. Exemplo Prático (Contador)

Este exemplo demonstra como declarar um estado (`count`) e atualizá-lo (`setCount`) em resposta a um evento de clique:

```javascript
import React, { useState } from 'react';

function Contador() {
  // 1. Declarando o estado inicial (count = 0)
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Você clicou {count} vezes</p>
      
      {/* 2. Chamando a função de atualização no evento de clique */}
      <button onClick={() => setCount(count + 1)}>
        Clique para incrementar
      </button>
    </div>
  );
}

export default Contador;
```

**Ponto-chave:** Para alterar o valor de `count`, você **sempre** deve usar a função `setCount`. Se você tentar mudar `count` diretamente, a interface não será atualizada.

### 4\. Usando o Valor Anterior

Quando a nova atualização do estado depende do valor anterior, é recomendado passar uma função para a função de atualização:

```javascript
// A função recebe o 'prevState' (estado anterior) como argumento
setCount(prevState => prevState + 1);
```