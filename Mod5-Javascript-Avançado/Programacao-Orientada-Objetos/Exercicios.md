# Lista de Exercícios: POO com JavaScript

Esta lista foca nos pilares de **Encapsulamento** e **Herança** utilizando a sintaxe moderna de classes do ES6.

## Exercício 1: O Cofre (Encapsulamento)

O objetivo aqui é proteger dados sensíveis para que não sejam alterados diretamente de fora da classe.

* **Tarefa:** Crie uma classe `ContaBancaria`.
* **Requisitos:**
1. Atributo privado `#saldo` iniciado em `0`.
2. Método `depositar(valor)` que soma ao saldo.
3. Método `sacar(valor)` que subtrai do saldo apenas se houver saldo disponível.
4. Um **Getter** para o saldo (para que possamos ver o valor, mas não alterá-lo com um simples `=`).


* **Teste:** Tente acessar `conta.#saldo` fora da classe e veja o erro que o JavaScript retorna.

---

## Exercício 2: Frota de Veículos (Herança)

Vamos praticar como reaproveitar código de uma classe "pai" em classes "filhas".

* **Tarefa:** Crie uma hierarquia de veículos.
* **Requisitos:**
1. Classe base `Veiculo` com propriedades `marca` e `modelo`, e um método `ligar()`.
2. Classe `Moto` que **estende** `Veiculo` e adiciona a propriedade `cilindradas`.
3. Classe `Carro` que **estende** `Veiculo` e adiciona a propriedade `portas`.


* **Dica:** Lembre-se de usar o método `super()` dentro do construtor das classes filhas.

---

## Exercício 3: Sistema de RH (Encapsulamento + Herança)

O desafio final que une os dois conceitos em um cenário de gestão de funcionários.

* **Tarefa:** Criar um sistema de cálculo salarial.
* **Requisitos:**
1. **Classe `Funcionario`:**
* Atributo privado `#salarioBase`.
* Método `getSalario()` para leitura.


2. **Classe `Gerente` (Herda de `Funcionario`):**
* Deve receber o `nome` e o `#salarioBase` no construtor.
* Método `calcularPagamento()`: Deve retornar o salário base + um bônus de 20%.


3. **Classe `Desenvolvedor` (Herda de `Funcionario`):**
* Método `calcularPagamento()`: Deve retornar apenas o salário base (sem bônus).

