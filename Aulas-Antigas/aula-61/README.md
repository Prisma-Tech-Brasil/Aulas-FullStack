
# Renderização de Listas em React

Este documento cobre conceitos básicos e práticas recomendadas para renderizar listas em React.

## O que é renderização de listas?
Renderização de listas é a técnica usada em React para exibir múltiplos itens de dados dinamicamente. Geralmente, ela utiliza o método `.map()` para iterar sobre um array e renderizar um elemento JSX para cada item.

## Exemplo básico
```jsx
const fruits = ['Maçã', 'Banana', 'Laranja'];

function FruitList() {
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}
```

## Chave Única (`key`)
Sempre forneça uma chave única para cada item renderizado. Isso ajuda o React a identificar quais itens foram alterados, adicionados ou removidos, otimizando a renderização.

### Exemplo com `id`
```jsx
const tasks = [
  { id: 1, title: 'Estudar React' },
  { id: 2, title: 'Praticar JavaScript' },
];

function TaskList() {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>{task.title}</li>
      ))}
    </ul>
  );
}
```

## Evitando Erros Comuns
1. **Evite usar índices como `key` sempre que possível.** Isso pode causar bugs em listas dinâmicas.
2. **Garanta que a `key` seja única.** Não reutilize valores duplicados.
3. **Não modifique diretamente o array original.** Sempre use métodos como `map`, `filter` ou `slice`.

## Renderização Condicional
Você pode combinar renderização condicional com listas.
```jsx
const tasks = [
  { id: 1, title: 'Estudar React', completed: true },
  { id: 2, title: 'Praticar JavaScript', completed: false },
];

function CompletedTasks() {
  return (
    <ul>
      {tasks
        .filter(task => task.completed)
        .map(task => (
          <li key={task.id}>{task.title}</li>
        ))}
    </ul>
  );
}
```

## Estilizando Itens de Lista
Utilize classes CSS ou bibliotecas como Tailwind para estilizar os itens de forma eficiente.
```jsx
function StyledList() {
  return (
    <ul className="list-disc pl-5">
      {fruits.map((fruit, index) => (
        <li key={index} className="text-blue-500">{fruit}</li>
      ))}
    </ul>
  );
}
```

## Conclusão
Renderizar listas é um aspecto essencial do React. Seguindo as melhores práticas, como usar chaves únicas e evitar modificar arrays originais, você pode criar interfaces dinâmicas e eficientes.

---

Para mais detalhes, consulte a [documentação oficial do React](https://reactjs.org/docs/lists-and-keys.html).
