
# Condicionais em JavaScript

As estruturas condicionais são usadas para tomar decisões com base em comparações. Em JavaScript, as principais estruturas são `if`, `else`, `else if` e `switch`.

## 🧠 Por que usar condicionais?

Elas permitem que seu programa se comporte de forma diferente dependendo das circunstâncias. Por exemplo: se um usuário estiver logado, mostre seu perfil; se não, redirecione para o login.

---

## ✅ Estrutura `if`, `else if` e `else`

```javascript
let idade = 18;

if (idade >= 18) {
    console.log("Você é maior de idade.");
} else if (idade >= 13) {
    console.log("Você é adolescente.");
} else {
    console.log("Você é criança.");
}
```

### 🔍 O que acontece aqui?
- Se a condição dentro do `if` for verdadeira, ela será executada.
- Se não, ele verifica o `else if`.
- Se nenhuma for verdadeira, executa o `else`.

---

## 🎯 Operadores de comparação

| Operador | Significado             |
|----------|--------------------------|
| `==`     | Igual (valor)            |
| `===`    | Estritamente igual       |
| `!=`     | Diferente                |
| `!==`    | Estritamente diferente   |
| `>`      | Maior que                |
| `<`      | Menor que                |
| `>=`     | Maior ou igual           |
| `<=`     | Menor ou igual           |

---

## 🔀 Switch Case

Útil quando temos muitos casos diferentes para a mesma variável.

```javascript
let cor = "vermelho";

switch (cor) {
  case "azul":
    console.log("A cor é azul");
    break;
  case "vermelho":
    console.log("A cor é vermelha");
    break;
  default:
    console.log("Cor não reconhecida");
}
```

---

## 📌 Dicas
- Sempre use `===` ao invés de `==` para evitar erros de tipo.
- Lembre de usar `break` no `switch`, senão ele continua executando os próximos cases.

---

## 🧪 Exercício proposto
Crie uma função que receba um número e diga se ele é positivo, negativo ou zero.

---

## 📚 Saiba mais
- [MDN - if...else](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/if...else)
- [MDN - switch](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/switch)
