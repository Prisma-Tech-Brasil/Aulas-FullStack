##  Configuração do Ambiente e Primeiro Projeto React

Este guia passo a passo aborda a instalação dos requisitos e a criação de um novo projeto React utilizando a ferramenta moderna e recomendada, o **Vite**.

### Passo 1: Instalação dos Pré-requisitos Fundamentais

O React é construído com JavaScript e requer um ambiente de execução para gerenciar dependências.

#### 1.1. Instalar o Node.js

O Node.js inclui o **npm** (Node Package Manager), que é essencial para instalar o React e outras bibliotecas.

1.  Acesse o site oficial do Node.js: [https://nodejs.org/](https://nodejs.org/).
2.  Baixe e instale a **versão LTS (Long-Term Support)**, pois ela é a mais estável e recomendada para a maioria dos usuários.
3.  **Verificação da Instalação:** Abra o terminal (ou Prompt de Comando/PowerShell no Windows) e execute os seguintes comandos para confirmar:
    ```bash
    node -v
    npm -v
    ```
    *Se você receber um número de versão (ex: `v20.10.0` e `10.2.3`), a instalação foi bem-sucedida.*

#### 1.2. Instalar um Editor de Código

Recomendamos o **Visual Studio Code (VS Code)**, que é o editor mais popular na comunidade React devido ao seu excelente suporte a JavaScript e suas extensões.

1.  Baixe e instale o VS Code: [https://code.visualstudio.com/](https://code.visualstudio.com/).
2.  (Opcional, mas Recomendado) Instale extensões úteis no VS Code, como:
      * **ES7+ React/Redux/React-Native snippets:** Para atalhos de código React.
      * **Prettier:** Para formatação automática de código.
      * **Bracket Pair Colorizer:** Para facilitar a visualização de chaves e parênteses.

-----

### Passo 2: Criando o Primeiro Projeto React com Vite

Historicamente, o `create-react-app` era o padrão, mas o **Vite** se tornou o mais rápido e recomendado pela comunidade para iniciar projetos.

#### 2.1. Iniciar a Criação do Projeto

1.  Abra seu terminal na pasta onde você deseja criar seu projeto (ex: `C:\Projetos`).
2.  Execute o seguinte comando para iniciar a criação do projeto via npm:
    ```bash
    npm create vite@latest
    ```

#### 2.2. Configurar o Projeto

O terminal fará algumas perguntas:

1.  **Project name (Nome do Projeto):**
      * Digite o nome da sua aplicação, por exemplo: `meu-primeiro-react`
2.  **Select a framework (Selecione um Framework):**
      * Use as setas para selecionar `React`.
3.  **Select a variant (Selecione uma Variante):**
      * Selecione `JavaScript` (ou `JavaScript + SWC` para compilação mais rápida, se preferir). Para fins de aprendizado inicial, `JavaScript` é suficiente.

#### 2.3. Instalar as Dependências

Após o Vite criar a estrutura básica de arquivos e pastas, o terminal exibirá instruções. Você precisará navegar até a nova pasta do projeto e instalar as dependências:

1.  **Navegue para a pasta do projeto:**
    ```bash
    cd meu-primeiro-react
    ```
    *(Substitua `meu-primeiro-react` pelo nome que você escolheu)*
2.  **Instale as dependências (pacotes) necessárias:**
    ```bash
    npm install
    ```
    *Este comando lê o arquivo `package.json` e baixa todas as bibliotecas de que o projeto precisa, como o próprio React e o ReactDOM.*

-----

### Passo 3: Executar o Projeto

Agora você está pronto para ligar sua aplicação React\!

1.  **Execute o comando para iniciar o servidor de desenvolvimento:**

    ```bash
    npm run dev
    ```

2.  **Acesse a Aplicação:**

      * O terminal fornecerá um endereço local, geralmente algo como: `http://localhost:5173/`
      * Copie e cole este endereço no seu navegador.

    *Seu primeiro projeto React, criado pelo Vite, estará rodando e exibindo a página inicial\!*

#### O que fazer a seguir?

1.  Pare o servidor no terminal pressionando **Ctrl + C**.
2.  O principal arquivo para começar a entender o React é geralmente `src/App.jsx`. Nele, você verá a sintaxe **JSX** e a estrutura do seu primeiro **Componente** React.