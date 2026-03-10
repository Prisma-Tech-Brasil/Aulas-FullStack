# Guia de Referência: Programação Orientada a Objetos (POO) em JavaScript

Este guia resume os conceitos fundamentais para transformar seu código "solto" em uma estrutura profissional e organizada.

---

## 1. O que é uma Classe?

A **Classe** é o molde (blueprint). O **Objeto** é o que nasce desse molde (instância).

```javascript
// O Molde
class Time {
  constructor(nomeAtribuido) {
    this.nome = nomeAtribuido; // Propriedade
    this.pontos = 0;
  }

  // Método (Ação que o time pode fazer)
  vencer() {
    this.pontos += 3;
  }
}

// Criando Objetos (Instâncias)
const timeA = new Time("Flamengo");
const timeB = new Time("Vasco");

timeA.vencer(); 
console.log(timeA.pontos); // 3
```

---

## 2. Os 4 Pilares da POO

### A. Abstração

Focar apenas no que é essencial para o sistema.
*Exemplo:* Para uma tabela de campeonato, o objeto `Time` não precisa saber a cor do uniforme ou o nome do estádio, apenas o `nome` e os `pontos`.

### B. Encapsulamento

Esconder detalhes internos e proteger os dados. Em JavaScript, usamos o `#` para criar propriedades **privadas**.

```javascript
class Conta {
  #saldo = 0; // Ninguém fora da classe pode mudar o saldo diretamente

  depositar(valor) {
    if (valor > 0) this.#saldo += valor;
  }

  get exibirSaldo() {
    return `R$ ${this.#saldo}`;
  }
}

const minhaConta = new Conta();
minhaConta.depositar(100);
// console.log(minhaConta.#saldo); // Erro! Protegido.
console.log(minhaConta.exibirSaldo); // R$ 100
```

### C. Herança

Permite que uma classe herde características de outra. Evita repetição de código (DRY - Don't Repeat Yourself).

```javascript
class Usuario {
  constructor(nome) {
    this.nome = nome;
  }
  logar() { console.log(`${this.nome} entrou no sistema.`); }
}

// Admin HERDA de Usuario
class Admin extends Usuario {
  deletarTime() { console.log("Time removido!"); }
}

const chefe = new Admin("Carlos");
chefe.logar(); // Funciona porque ele herdou!
```

### D. Polimorfismo

"Muitas formas". Um mesmo método pode se comportar de forma diferente em classes diferentes.

```javascript
class Atleta {
  treinar() { console.log("Treinando..."); }
}

class Goleiro extends Atleta {
  treinar() { console.log("Treinando defesa de pênaltis!"); } // Comportamento específico
}

class Atacante extends Atleta {
  treinar() { console.log("Treinando finalização ao gol!"); } // Comportamento específico
}
```

---

## 3. Dicas de Ouro para o Projeto

1. **O operador `this**`: Ele refere-se ao objeto que está sendo "mexido" naquele momento. Se você tem 10 times, o `this` garante que você está alterando os pontos do time certo.
2. **Passagem por Referência**: Quando você passa um objeto `Time` para dentro da classe `Partida`, você não está passando apenas o nome dele. Você está passando o "corpo" todo do objeto. Se a `Partida` mudar algo no time, essa mudança vale para o campeonato inteiro!
3. **Arrays de Objetos**: Use métodos como `.sort()` e `.forEach()` para manipular sua lista de times. Eles funcionam perfeitamente com objetos.

### Exemplo de Ordenação de Tabela:

```javascript
// Ordenando por quem tem mais pontos (descendente)
meusTimes.sort((a, b) => b.pontos - a.pontos);
```
