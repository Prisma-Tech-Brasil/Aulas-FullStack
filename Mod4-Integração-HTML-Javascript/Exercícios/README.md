### Exercicio 1: Painel de Controle Espacial (Temática Sci-Fi / Cyberpunk)

*Este projeto muda o foco de "adicionar itens" para "gerenciar estados e estilos". Os alunos vão trabalhar muito com manipulação de classes CSS (`classList.toggle`, `classList.add`) e alteração de atributos de elementos, simulando o painel de uma nave.*


**Desafio: Painel de Comando da Nave Estelar**

Você foi designado para programar a interface de controle de uma nave espacial. O painel precisa ser interativo, responsivo e reagir aos comandos do piloto em tempo real.

> **Requisitos do Projeto:**
> 1. **HTML (Estrutura):** Crie um layout que simule uma tela de computador de bordo. Deve conter: um medidor de combustível (pode ser uma barra de progresso ou uma `<div>`), botões para "Ligar Motores", "Ativar Escudo" e "Hiperespaço", e uma tela de status (um parágrafo de texto).
> 2. **CSS (Estilização):** Use uma temática escura (fundo preto/azul escuro) com fontes e cores neon (verde, ciano ou vermelho). Capriche nos efeitos de brilho (`box-shadow`).
> 3. **JavaScript (Dinamismo/DOM):**
> * **Ligar Motores:** Ao clicar, o texto de status deve mudar para "Motores Prontos" e o botão deve ficar verde.
> * **Ativar Escudo:** Ao clicar, uma borda brilhante deve aparecer ao redor de todo o painel (simulando o escudo ligando) e o texto deve atualizar.
> * **Hiperespaço:** Ao clicar, o JavaScript deve iniciar uma contagem regressiva de 3 para 1 na tela de status. Quando chegar a 0, a cor de fundo da página inteira deve piscar em branco rapidamente (efeito visual do salto) e exibir "Nave em Hiperespaço!".

---

### Exercicio 2: Pokédex Simplificada ou Catálogo de Monstros (Temática Geek / RPG)

*Ideal para treinar manipulação de strings, busca/filtro em elementos existentes e alteração dinâmica de imagens com base na escolha do usuário.*

 **Desafio: Catálogo Interativo de Criaturas (Pokédex)**
 Sua missão é criar um catálogo interativo de monstros ou personagens. O usuário poderá clicar nos nomes para ver os detalhes e até pesquisar por um monstro específico.
> **Requisitos do Projeto:**
> 1. **HTML (Estrutura):** Uma barra de pesquisa (input de texto), uma lista lateral com o nome de pelo menos 4 criaturas e, ao lado, uma "área de detalhes" (com uma tag `<img>` vazia, um título para o nome e um parágrafo para a descrição).
> 2. **CSS (Estilização):** Estilize em formato de enciclopédia ou videogame antigo. Use um layout de duas colunas (Listagem na esquerda, Detalhes na direita).
> 3. **JavaScript (Dinamismo/DOM):**
> * **Troca de exibição:** Quando o usuário clicar em um nome da lista lateral, o JavaScript deve alterar o `src` da imagem principal, o título e a descrição para corresponder ao monstro clicado.
> * **Sistema de Filtro (Busca):** Conforme o usuário digita na barra de pesquisa, o JavaScript deve verificar os nomes da lista lateral. Se o nome não contiver as letras digitadas, esse monstro deve ser escondido (`display: none`), mostrando apenas os que batem com a busca.

---

### Exercicio 3: Pomodoro Timer de Estudos (Temática Produtividade / Utilitário)

*Este projeto introduz o conceito de tempo no JavaScript (`setInterval`). É uma ferramenta de produtividade real que mexe diretamente com a DOM a cada segundo e altera o comportamento da página quando o tempo acaba.*

 **Desafio: Cronômetro de Produtividade (Método Pomodoro)**
 Vamos criar uma ferramenta real de produtividade: um timer que faz uma contagem regressiva de 25 minutos para foco, com um alarme visual quando o tempo acabar.
> **Requisitos do Projeto:**
> 1. **HTML (Estrutura):** Um display grande exibindo o tempo (ex: `<h1>25:00</h1>`), e dois botões: "Iniciar" e "Resetar".
> 2. **CSS (Estilização):** Visual limpo, minimalista e focado. Use uma cor calorosa e calma (como um tom de vermelho/tomate ou pastel).
> 3. **JavaScript (Dinamismo/DOM):**
> * Ao clicar em "Iniciar", o JavaScript deve começar a reduzir o tempo segundo a segundo (dica: converta tudo para segundos na lógica interna e atualize o texto do HTML dividindo por 60).
> * O botão "Iniciar" deve mudar de texto para "Pausar" enquanto o cronômetro estiver rodando.
> * Ao clicar em "Resetar", o tempo deve voltar para `25:00`.
> * **Quando o tempo chegar a `00:00`:** A página deve mudar a cor de fundo drasticamente (ex: para verde) e exibir um alerta ou mensagem: "Hora de descansar!".