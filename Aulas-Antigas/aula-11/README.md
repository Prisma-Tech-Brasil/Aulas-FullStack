# Laços de Repetição em JavaScript

Os **laços de repetição** (ou loops) são estruturas usadas para **executar um bloco de código várias vezes**. Eles são fundamentais para automatizar tarefas repetitivas, como contar, repetir mensagens ou percorrer dados.

---

## Tipos de laços em JavaScript

### 🔁 `while`

Repete o código **enquanto** uma condição for verdadeira.

```javascript
let i = 0;

while (i < 5) {
    console.log("Valor de i:", i);
    i = i + 1;
}
```

### 🔁 `do...while`

Executa o bloco **pelo menos uma vez**, e continua **enquanto** a condição for verdadeira.

```javascript
let i = 0;

do {
    console.log("Valor de i:", i);
    i = i + 1;
} while (i < 5);
```

### 🔁 `for`

Geralmente usado quando sabemos **quantas vezes** queremos repetir algo.

```javascript
for (let i = 0; i < 5; i++) {
    console.log("Valor de i:", i);
}
```

---

## Boas práticas

- Evite loops infinitos (`while(true)`) sem condições de parada.
- Use nomes claros para variáveis de controle (`i`, `contador`, `indice`).
- Se possível, escolha o laço mais simples e legível para a tarefa.

---

## Quando usar cada um?

| Tipo        | Quando usar?                                       |
|-------------|----------------------------------------------------|
| `while`     | Quando **não sabemos** exatamente quantas vezes.   |
| `do...while`| Quando **precisamos executar pelo menos uma vez**. |
| `for`       | Quando **sabemos quantas vezes** vamos repetir.    |

---

## Exemplo prático: tabuada do 3

```javascript
for (let i = 1; i <= 10; i++) {
    console.log("3 x " + i + " = " + (3 * i));
}
```

---

Aprender a usar laços é essencial para **automatizar tarefas**, **percorrer dados** e construir **algoritmos eficientes** no JavaScript!

