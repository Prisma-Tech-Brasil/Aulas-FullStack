## Primeira Atividade Prática com React

Com o ambiente configurado e o projeto rodando, a primeira atividade deve focar nos pilares básicos do React: **Componentização**, **JSX** e a passagem de dados via **Props**.

### Objetivo da Atividade: Construção de um Cartão de Perfil

O objetivo é transformar o conteúdo da página inicial do React em três componentes reutilizáveis, para exibir informações de perfis de usuário simples.

-----

### Passo 1: Limpar o Projeto Base

1.  **Abra o arquivo `src/App.jsx` no VS Code.**

2.  **Limpe o componente `App`:** Remova todo o código de marcação (JSX) dentro da função `App` e do `return()`. Mantenha a estrutura mínima:

    ```jsx
    // src/App.jsx

    import './App.css'

    function App() {
      // O código da atividade virá aqui

      return (
        <div className="App">
          <h1>Lista de Perfis de Usuários</h1>
          {/* Aqui serão inseridos os cartões */}
        </div>
      )
    }

    export default App
    ```

3.  **Abra o arquivo `src/App.css` e limpe-o (ou remova-o):** Para simplificar, você pode apagar todo o conteúdo do arquivo CSS.

-----

### Passo 2: Criar o Componente Base (`ProfileCard`)

Crie um novo arquivo chamado `src/components/ProfileCard.jsx` (crie a pasta `components` se ela não existir).

Este componente receberá os dados de um perfil via `props` e exibirá o layout.

1.  **Crie o arquivo `src/components/ProfileCard.jsx` e insira o código:**

    ```jsx
    // src/components/ProfileCard.jsx
    import React from 'react';

    // 1. Receba as "props" (propriedades) como argumento da função.
    const ProfileCard = (props) => {
      return (
        <div className="profile-card">
          {/* 2. Use as props para exibir os dados */}
          <img
            src={props.fotoUrl}
            alt={`Foto de perfil de ${props.nome}`}
            style={{ width: '150px', height: '150px', borderRadius: '50%' }}
          />
          <h2>{props.nome}</h2>
          <p>Profissão: {props.profissao}</p>
          <p>Idade: {props.idade} anos</p>
          <button onClick={() => alert(`Você clicou no perfil de ${props.nome}`)}>
            Ver Detalhes
          </button>
        </div>
      );
    };

    export default ProfileCard;
    ```

-----

### Passo 3: Usar o Componente no `App.jsx`

Agora, use o novo componente no arquivo principal, passando dados fictícios.

1.  **Volte para `src/App.jsx`.**

2.  **Importe** o componente `ProfileCard`.

3.  **Use o componente** no `return`, passando as propriedades (*props*) necessárias.

    ```jsx
    // src/App.jsx

    import './App.css'
    import ProfileCard from './components/ProfileCard' // 1. Importe o componente

    function App() {
      return (
        <div className="App" style={{ textAlign: 'center' }}>
          <h1>Lista de Perfis de Usuários</h1>

          {/* 2. Crie e use o ProfileCard, passando as props */}
          <ProfileCard
            nome="Maria Silva"
            profissao="Desenvolvedora Front-end"
            idade={28}
            fotoUrl="https://via.placeholder.com/150/0000FF/808080?Text=M.S"
          />

          {/* Crie outro cartão com dados diferentes */}
          <ProfileCard
            nome="João Santos"
            profissao="UX Designer"
            idade={35}
            fotoUrl="https://via.placeholder.com/150/FF0000/FFFFFF?Text=J.S"
          />

          {/* Desafio: Faça um terceiro com os conceitos aprendidos e suas informações*/}
        </div>
      )
    }

    export default App
    ```
