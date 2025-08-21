# Aula 4 - Git e GitHub

Aqui está o conteúdo do PDF sobre Git e GitHub no formato Markdown:

# Git e GitHub

## O que é Git?
Git é um sistema de controle de versão distribuído muito utilizado no mundo do desenvolvimento de software. Ele foi desenvolvido em 2005 por Linus Torvalds, o criador do kernel do Linux. O Git permite que cada desenvolvedor tenha uma cópia completa do repositório, incluindo todo o histórico de alterações. Por ser distribuído, é possível trabalhar offline, fazendo commits e outras operações sem depender de uma conexão constante com um servidor principal.

---

## Como funciona?
Todos os arquivos e seus históricos são armazenados em um repositório. O Git é distribuído, ou seja, cada pessoa tem uma cópia completa do repositório, não apenas uma parte do servidor principal.

---

## Como baixar e instalar?

* **Windows:**
    1. Acesse o site oficial do Git.
    2. Clique no link de download para Windows.
    3. Execute o instalador e siga as instruções, aceitando as configurações padrão se não for um usuário avançado.
    4. Conclua a instalação.

* **Linux:**
    1. Instale o Git usando o gerenciador de pacotes da sua distribuição.
    2. Para o Ubuntu, use o comando `sudo apt-get install git`.

* **macOS:**
    1. O Git pode ser instalado através do Xcode Command Line Tools.
    2. Abra o Terminal e digite `git --version` para verificar se ele já está instalado. Se não estiver, o sistema solicitará a instalação.

---

## Configurando o Git

1. Configure seu nome de usuário e e-mail. O Git registra quem fez cada alteração. Use os comandos no terminal:
    * `git config --global user.name "Seu Nome"`
    * `git config --global user.email "seu@email.com"`

2. Crie um repositório Git. Para começar a rastrear seu código, navegue até a pasta do seu projeto e execute `git init`.

3. Adicione arquivos ao controle de versão. Use o comando `git add <nome-do-arquivo>` para adicionar arquivos à "staging area", onde você os prepara para serem salvos.

4. Faça um Commit. Um commit é um snapshot das suas alterações. Use `git commit -m "Sua mensagem de commit aqui"` para criar um commit com uma mensagem descritiva.

5. Visualize o histórico de commits. Use `git log` para ver o histórico de commits no repositório.

---

## Conceitos Fundamentais

* **Repositórios:** São pastas que contêm todos os arquivos e o histórico de um projeto.
* **Commits:** São registros das alterações feitas no projeto. Cada commit é uma entrada no histórico com informações sobre as mudanças realizadas.
* **Árvores (Trees):** Representam a estrutura de diretórios e arquivos em um commit específico, registrando a organização do projeto ao longo do tempo.
* **Ramificações (Branches):** Permitem criar linhas separadas de desenvolvimento para trabalhar em recursos ou correções sem afetar a linha principal do projeto, geralmente chamada de "main".
* **Fusões (Merges):** Permitem combinar as alterações das branches de volta para a linha principal quando as mudanças estão prontas.

---

## Principais Comandos do Git

* `git init`: Inicializa um repositório Git em um diretório.
* `git clone`: Cria uma cópia de um repositório remoto em sua máquina local.
* `git status`: Verifica o status do seu repositório local e central.
* `git add`: Adiciona arquivos ao pacote de alterações a serem salvas.
* `git commit`: Cria uma nova versão do projeto a partir de um pacote de alterações.
* `git log`: Exibe o histórico de alterações do projeto.
* `git branch`: Cria novos ramos de desenvolvimento e lista os existentes.
* `git checkout`: Navega entre versões do projeto e entre diferentes ramificações.
* `git diff`: Visualiza as modificações entre commits.
* `git config`: Configura e personaliza o ambiente Git.

---

## O que é GitHub?
O GitHub é uma plataforma baseada na web para hospedagem de repositórios Git. É uma ferramenta de colaboração que permite que equipes trabalhem juntas em projetos de software.

### Como criar uma conta?
1. Acesse o site do GitHub em `https://github.com`.
2. Clique no botão "Sign up" (Inscrever-se) no canto superior direito.
3. Preencha suas informações pessoais (nome de usuário, e-mail e senha).
4. Complete a verificação de Captcha.

---

## Repositórios Locais vs. Repositórios Remotos
* **Repositórios Locais:** São cópias de um projeto armazenadas em sua máquina.
* **Repositórios Remotos:** São versões do projeto hospedadas em um servidor, como o GitHub.

---

## O que é README?
O README é um arquivo que fornece informações essenciais sobre um projeto. Ele é escrito em Markdown (`.md`), uma linguagem de marcação que converte texto em HTML. O arquivo geralmente inclui:
* Descrição do projeto.
* Funcionalidades.
* Como os usuários podem utilizá-lo.
* Onde encontrar ajuda.
* Autores do projeto.

---

## Colaborando com o GitHub

* **`git pull`**: Busca novos commits do repositório remoto e atualiza sua branch local.
* **`git merge`**: Integra as alterações de uma branch de funcionalidade de volta para a branch principal.
* **`git push`**: Envia suas alterações do repositório local para o remoto.
* **Pull Requests**: Em ambientes colaborativos, são usados para revisar e discutir as alterações antes de mesclá-las à branch principal, adicionando uma camada de controle de qualidade.
* **Fork**: Cria uma cópia de um repositório de código aberto na sua própria conta, permitindo sugerir alterações sem afetar o repositório original.
* **Git Flow**: Um modelo para organizar branches em um projeto, facilitando o gerenciamento de diferentes aspectos do ciclo de vida do software.