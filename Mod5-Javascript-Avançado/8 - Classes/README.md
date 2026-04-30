# Classes em JavaScript

As **Classes** são "moldes" para criar objetos. Elas ajudam a organizar o código, agrupando dados (propriedades) e comportamentos (métodos) em um só lugar.

---

## 1. A Estrutura Básica

Para criar uma classe, usamos a palavra-chave `class`. Por convenção, o nome da classe sempre começa com **letra maiúscula**.

```javascript
class Heroi {
  // O código da classe fica aqui dentro
}

```

---

## 2. O Método `constructor`

O **constructor** é o "motor de arranque". Ele é o primeiro método executado quando criamos um novo objeto.

* **Para que serve:** Definir os valores iniciais do objeto.
* **Quando é chamado:** Automaticamente ao usar o comando `new`.

---

## 3. O que é o `this`?

O `this` é como um dedo apontando para o próprio objeto que está sendo criado ou usado.

Imagine que você tem dois heróis: Batman e Superman. Quando o Batman usa o método "atacar", o `this` garante que ele use a *sua própria* força, e não a do Superman.

* **`this.nome`**: Significa "o nome *deste* objeto específico".

---

## 4. Exemplo Completo: Criando uma Instância

Chamamos de **instância** o objeto real criado a partir do molde (classe).

```javascript
class Heroi {
  constructor(nome, poder) {
    this.nome = nome;   // Propriedade
    this.poder = poder; // Propriedade
  }

  // Isso é um Método (uma ação que o herói faz)
  apresentar() {
    console.log(`Olá, eu sou o ${this.nome} e meu poder é ${this.poder}!`);
  }
}

// Criando os objetos (Instanciando)
const heroi1 = new Heroi("Batman", "Inteligência");
const heroi2 = new Heroi("Flash", "Velocidade");

heroi1.apresentar(); // Saída: Olá, eu sou o Batman...
heroi2.apresentar(); // Saída: Olá, eu sou o Flash...

```

---

## 5. Resumo de Termos para Alunos

| Termo | O que é? | Analogia |
| --- | --- | --- |
| **Classe** | O molde ou projeto. | A forma de um bolo. |
| **Objeto** | O resultado final. | O bolo pronto. |
| **Constructor** | O preparo inicial. | Misturar os ingredientes. |
| **Atributo/Propriedade** | Características. | Cor do bolo, sabor. |
| **Método** | Ações. | O bolo sendo comido. |
| **`this`** | Referência interna. | "Eu", o próprio objeto. |

---

### ⚠️ Pontos de Atenção

1. **Hoisting:** Ao contrário das funções comuns, você **não** pode usar uma classe antes de declará-la no código.
2. **Strict Mode:** O código dentro das classes sempre roda em "Modo Estrito" (strict mode) por padrão, o que ajuda a evitar erros comuns de JS.
