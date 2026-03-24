# Exercício: Sistema de Gerenciamento de Loja (SPA)
Neste exercício, vamos aplicar conceitos de Orientação a Objetos (POO), manipulação de DOM e persistência de dados no navegador para criar uma aplicação de página única (SPA - Single Page Application).

## Objetivo
Construir um sistema onde usuários possam se cadastrar, fazer login e visualizar produtos. Administradores terão permissões especiais para gerenciar o estoque da loja.

## Requisitos Técnicos
### 1. Arquitetura SPA (Single Page Application)
O projeto deve conter apenas um arquivo HTML. A navegação entre as telas (Login, Cadastro, Loja, Painel Admin) deve ser feita via JavaScript, alterando a visibilidade de seções (<section> ou <div>) ou manipulando o conteúdo dinamicamente.

### 2. Modelagem de Dados (POO)
Utilize classes JavaScript para estruturar os usuários:

#### Classe Usuario:
Deve conter nome, email, senha e o método fazerLogin().

#### Classe Admin:
Deve herdar de Usuario. Adicione uma propriedade para identificar o nível de acesso e um método exclusivo (ex: cadastrarProduto()).

### 3. Persistência de Dados
Os dados não devem ser perdidos ao atualizar a página:

LocalStorage: Armazene a lista completa de usuarios cadastrados e a lista de produtos.

SessionStorage: Armazene os dados do usuário logado no momento para manter a sessão ativa enquanto a aba estiver aberta.

## Funcionalidades Esperadas
### Fase 1: Autenticação
Tela de Cadastro: Validar se o e-mail já existe no sistema antes de salvar.

Tela de Login: Verificar as credenciais no LocalStorage. Se corretas, salvar o objeto do usuário no SessionStorage e redirecionar para a Loja.

### Fase 2: A Loja (Visão do Usuário)
Exibir uma lista de produtos salvos no LocalStorage.

Cada produto deve ter: Nome, Preço e Categoria.

Botão de Logout que limpa o SessionStorage e volta para a tela de Login.

### Fase 3: Gestão (Visão do Admin)
Se o usuário logado for um Admin, exiba um formulário de Cadastro de Produtos.

Adicione a opção de Excluir Produto apenas para perfis administrativos.

## Desafios Extras (Opcional)

- Filtro de Busca: Adicione um campo para filtrar produtos por nome ou categoria em tempo real.

- Carrinho de Compras: Permita que usuários comuns adicionem produtos a uma lista temporária.

- Criptografia Simples: Salve as senhas no LocalStorage utilizando btoa() (Base64) para não ficarem em texto plano.