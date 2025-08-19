
# Objetos em JavaScript

## 📚 O que são Objetos?

Objetos são estruturas que permitem armazenar múltiplos valores relacionados dentro de uma mesma variável. Eles funcionam com pares de **chave** e **valor**.

Exemplo de um objeto simples:

```js
const pessoa = {
  nome: "João",
  idade: 25,
  profissao: "Programador"
};
```

Cada **chave** (também chamada de *propriedade*) é seguida por dois pontos `:` e o **valor** correspondente.

---

## 🎯 Por que usar Objetos?

- Organizam dados complexos de forma clara.
- Agrupam informações relacionadas.
- Facilitam acesso e atualização de dados.

---

## 🛠 Como acessar propriedades

### Notação por ponto:

```js
console.log(pessoa.nome); // "João"
```

### Notação por colchetes:

```js
console.log(pessoa["idade"]); // 25
```

---

## 🔄 Como modificar valores

```js
pessoa.idade = 26;
pessoa["profissao"] = "Desenvolvedor Fullstack";
```

---

## ➕ Como adicionar novas propriedades

```js
pessoa.email = "joao@email.com";
```

---

## ❌ Como remover uma propriedade

```js
delete pessoa.email;
```

---

## 🧩 Objetos com funções (métodos)

Objetos também podem ter funções como propriedades, chamadas de **métodos**:

```js
const usuario = {
  nome: "Maria",
  saudar: function() {
    console.log("Olá, " + this.nome + "!");
  }
};

usuario.saudar(); // "Olá, Maria!"
```

> `this` se refere ao próprio objeto onde a função está sendo executada.

---

## 🔁 Percorrendo um objeto

Você pode usar o `for...in` para percorrer as chaves de um objeto:

```js
for (let chave in pessoa) {
  console.log(chave + ": " + pessoa[chave]);
}
```

---

## 📌 Resumo

- Objetos armazenam dados em pares chave-valor.
- Permitem acessar, modificar, adicionar e excluir dados com facilidade.
- Podem ter funções como propriedades (métodos).
- São fundamentais no JavaScript moderno.

---

**Próximos passos:** Aprender sobre objetos aninhados, classes e herança em JavaScript.
