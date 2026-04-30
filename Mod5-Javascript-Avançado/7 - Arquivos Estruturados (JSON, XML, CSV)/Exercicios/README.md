# Exercícios de Manipulação de Arquivos Estruturados (JSON)

## Exercício 1: Sistema de Inventário de Loja de Games
**Tema:** Jogos e Produtos

### 1. Criar o Arquivo JSON
Crie um arquivo chamado `jogos.json` com a seguinte estrutura de dados:

os objetos devem conter as seguintes propriedades:
- `id`: número inteiro representando o identificador do jogo.
- `titulo`: string representando o nome do jogo.
- `preco`: número decimal representando o preço do jogo.
- `plataformas`: array de strings representando as plataformas em que o jogo está disponível (ex: ["PC", "Xbox", "PlayStation"]).
- `emEstoque`: booleano indicando se o jogo está disponível para venda.

### 2. Manipular no JavaScript
Escreva um script JavaScript que:
1. Leia ou importe a lista de jogos do arquivo `jogos.json`.
2. Filtre apenas os jogos que **estão em estoque** (`emEstoque: true`).
3. Calcule e exiba o preço médio dos jogos em estoque.


## Exercício 2: Perfil e Preferências de Usuário
**Tema:** Redes Sociais / Plataforma de Conteúdo

### 1. Criar o Arquivo JSON
Crie um arquivo chamado `usuario.json` contendo as informações do perfil de um usuário.

O objeto JSON deve conter as seguintes propriedades:
- `idUsuario`: número inteiro representando o identificador do usuário.
- `username`: string representando o nome de usuário.
- `nome`: string representando o nome completo do usuário.
- `temasFavoritos`: array de strings representando os temas de interesse do usuário (ex: ["JavaScript", "Python", "Inteligência Artificial"]).
- `configuracoes`: objeto contendo as preferências do usuário, como:
  - `modoNoturno`: booleano indicando se o modo noturno está ativado.
  - `notificacoesEmail`: booleano indicando se o usuário deseja receber notificações por email.
  - `idioma`: string representando o idioma preferido do usuário (ex: "pt-BR").
- `pontos`: número inteiro representando a pontuação ou nível do usuário na plataforma.

### 2. Manipular no JavaScript
Escreva um script JavaScript que:
1. Leia o arquivo `usuario.json`.
2. Adicione uma nova habilidade ("CSS") à lista `temasFavoritos`.
3. Converta o objeto modificado de volta para uma string no formato JSON e exiba no console.

## Exercício 3: Controle de Despesas Pessoais
**Tema:** Finanças e Orçamento

### 1. Criar o Arquivo JSON
Crie um arquivo chamado `despesas.json` representando um mês de gastos:

### 2. Manipular no JavaScript
Escreva um script JavaScript que:
1. Leia o arquivo `despesas.json`.
2. Some todos os valores de despesas para calcular o gasto total do mês.
3. Crie e exiba um novo objeto JSON contendo o resumo dos gastos agrupados pelo valor total.
