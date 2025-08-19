# 🧠 Variáveis e Dados Primitivos em JavaScript

## 📌 O que são variáveis?

Variáveis são **espaços na memória** onde podemos **guardar informações** para usá-las depois. Em JavaScript, usamos `let`, `const` ou `var` para declarar variáveis (recomendamos usar `let` e `const`).

### Exemplos:

```javascript
let nome = "Ana";
const idade = 25;
```

- `let` permite que o valor seja **alterado** depois.
- `const` cria uma variável **constante** (o valor não pode mudar).

---

## 📦 Tipos de Dados Primitivos

JavaScript possui alguns tipos de dados chamados **primitivos**. Eles são os tipos mais básicos que representam valores simples:

### 1. **String** → Texto

Usado para representar textos. Sempre entre aspas.

```javascript
let cidade = "Vitória";
```

### 2. **Number** → Número

Pode ser inteiro ou com casas decimais.

```javascript
let idade = 30;
let preco = 49.99;
```

### 3. **Boolean** → Verdadeiro ou Falso

Usado para lógica.

```javascript
let estaLogado = true;
let temConta = false;
```

### 4. **Undefined** → Não definido

É o valor de uma variável que **ainda não recebeu um valor**.

```javascript
let valor;
console.log(valor); // undefined
```

### 5. **Null** → Nulo (sem valor)

Usado para dizer que uma variável está **vazia de propósito**.

```javascript
let resposta = null;
```

### 6. **BigInt** → Números muito grandes (raro no dia a dia)

```javascript
const numeroGrande = 1234567890123456789012345678901234567890n;
```

### 7. **Symbol** → Identificadores únicos (avançado)

---

## 🛠️ Boas práticas

- Use `let` quando o valor for mudar.
- Use `const` quando o valor não deve mudar.
- Dê nomes claros e sem espaços para as variáveis.
- JavaScript é **case sensitive**: `idade` é diferente de `Idade`.

---

## 🚀 Conclusão

Saber declarar variáveis e entender os tipos primitivos é o **primeiro passo** para programar em JavaScript. Essas ferramentas básicas são usadas em praticamente **todo código que você vai escrever**.
