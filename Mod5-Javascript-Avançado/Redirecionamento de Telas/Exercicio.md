# Proposta de Atividade: Sistema de Acesso Inteligente
## Objetivo
Criar uma interface de login que direcione o usuário para conteúdos exclusivos dependendo das suas credenciais.

## O que deve ser desenvolvido

Página de Login (index.html): Um formulário com campos de usuário, senha e um botão de entrar.

Lógica de Verificação (script.js): Um script que valide as seguintes credenciais:

* Admin: Usuário: admin | Senha: 123

* Comum: Usuário: aluno | Senha: 999

Páginas de Destino:

Painel Admin: Deve ter um fundo de cor diferente (ex: vermelho suave) e uma mensagem: "Bem-vindo, Administrador! Você tem controle total."

Painel Usuário: Deve ter um fundo azul claro e a mensagem: "Olá, Aluno! Aproveite seus materiais de estudo."

## Instruções para os Alunos
#### Passo 1: 
Crie o formulário em HTML. Lembre-se de dar id específicos para o campo de input e para o botão.

#### Passo 2:
No JavaScript, crie uma função que será disparada ao clicar no botão (onclick).

#### Passo 3:
Dentro da função, use um if para verificar se os dados batem com o usuário "admin". Use um else if para o usuário "aluno".

#### Passo 4:
Se os dados estiverem errados, exiba um alert("Acesso Negado!").

Desafio Extra: Adicione um botão de "Sair" (Logout) nas páginas de destino que retorne o usuário para a tela de login.