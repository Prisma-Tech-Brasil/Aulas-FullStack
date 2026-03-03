# Exercicios de Classes em Javascript

## Exercício 1: A Concessionária (Básico)
Objetivo: Praticar a estrutura básica, o constructor e a criação de instâncias.

### Desafio: Crie uma classe chamada Carro.

- O construtor deve receber marca, modelo e ano.

- Crie um método chamado descrever que retorne uma frase como: "Este carro é um Toyota Corolla de 2022".

- Instancie dois carros diferentes e exiba a descrição no console.

## Exercício 2: O Banco Digital (Intermediário)
Objetivo: Entender manipulação de estado (propriedades) através de métodos.

### Desafio: Crie uma classe ContaBancaria.

- A conta deve começar com um saldo de 0 e receber o nome do titular no construtor.

- Crie um método depositar(valor).

- Crie um método sacar(valor) que só permite a retirada se houver saldo suficiente (use um if).

- Teste a classe realizando um depósito, um saque bem-sucedido e um saque negado.


## Exercício 3: Gerador de Perfil (Front-end)
### Objetivo: Integrar classes com o DOM (HTML).

Desafio: Crie uma classe Usuario que recebe como atributos nome e cargo.

Ela deve ter um método que gera um pequeno "card" HTML e o insere na tela dentro do body.

Estilize o card com css

Crie uma area no HTML para criar cards com input para inserir nome e cargo e um botao, por meio da DOM deve se criar uma nova instancia de Usuário e mostrar dentro da tela


## Dica para os alunos:
Lembrem-se que o this dentro da classe sempre se refere ao objeto específico que acabou de ser criado (a "cópia" da fábrica).