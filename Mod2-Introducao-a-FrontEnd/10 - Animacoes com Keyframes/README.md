# Animações CSS com `@keyframes`

As animações CSS permitem criar transições de um conjunto de estilos CSS para outro de forma suave ao longo do tempo. O coração do mecanismo de animação é a regra **`@keyframes`**.

## 1\. O que são `@keyframes`?

`@keyframes` é uma regra CSS que define os estágios (ou quadros-chave) de uma animação. Ela controla exatamente como uma animação progride em diferentes momentos ao longo de sua duração.

### Sintaxe Básica:

```css
@keyframes nome-da-animacao {
  /* Estágio inicial */
  from {
    propriedade: valor;
  }
  /* Estágio final */
  to {
    propriedade: outro-valor;
  }
}
```

Ou usando porcentagens para mais controle:

```css
@keyframes nome-da-animacao {
  0% {
    /* Estilos no início da animação */
    transform: translateX(0);
  }
  50% {
    /* Estilos no meio da animação */
    transform: translateX(100px);
    opacity: 0.5;
  }
  100% {
    /* Estilos no fim da animação */
    transform: translateX(0);
    opacity: 1;
  }
}
```

  * **`from`** é um alias para **`0%`**.
  * **`to`** é um alias para **`100%`**.

## 2\. Aplicando a Animação ao Elemento

Após definir os `@keyframes`, você precisa aplicar a animação a um elemento CSS usando as propriedades de animação. A propriedade mais essencial é `animation`.

### Exemplo:

```css
.elemento-animado {
  /* Propriedade abreviada 'animation' (recomendado) */
  animation: nome-da-animacao 2s ease-in-out 1s infinite alternate;

  /* Equivalente às propriedades individuais: */
  animation-name: nome-da-animacao; /* Nome do @keyframes */
  animation-duration: 2s; /* Duração da animação (tempo) */
  animation-timing-function: ease-in-out; /* Curva de velocidade */
  animation-delay: 1s; /* Atraso antes de começar */
  animation-iteration-count: infinite; /* Quantas vezes rodará (ou 'infinite') */
  animation-direction: alternate; /* Direção (normal, reverse, alternate, alternate-reverse) */
  animation-fill-mode: forwards; /* Estilo aplicado antes/depois da animação (none, forwards, backwards, both) */
  animation-play-state: running; /* Estado (running ou paused) */
}
```

## 3\. Propriedades Chave da Animação (`animation-*`)

| Propriedade | Descrição | Valores Comuns |
| :--- | :--- | :--- |
| **`animation-name`** | O nome do bloco `@keyframes` a ser usado. **(Obrigatório)** | Qualquer nome válido |
| **`animation-duration`** | O tempo que a animação leva para completar um ciclo. **(Obrigatório)** | `2s`, `500ms` |
| **`animation-timing-function`** | Define a curva de velocidade da animação (como ela acelera/desacelera). | `ease`, `linear`, `ease-in-out`, `cubic-bezier(...)` |
| **`animation-iteration-count`** | O número de vezes que a animação deve ser reproduzida. | `1`, `3`, `infinite` |
| **`animation-direction`** | Se a animação deve ser reproduzida para frente, para trás ou alternada. | `normal`, `reverse`, `alternate` |
| **`animation-fill-mode`** | Define os estilos que o elemento deve manter antes e depois da execução da animação. | `none`, `forwards`, `backwards`, `both` |

## 4\. Dicas e Melhores Práticas

  * **Performance:** Para as melhores práticas de performance, anime propriedades que não causam *reflow* ou *repaint* intensivo, como **`transform`** e **`opacity`**, em vez de propriedades como `width`, `height`, ou `top`/`left`.
  * **Prefixo de Navegador:** Embora a maioria dos navegadores modernos não exija mais, para máxima compatibilidade com navegadores mais antigos, use prefixos como `-webkit-` para `@keyframes` e todas as propriedades `animation-*`.
  * **Encadeamento:** Você pode aplicar múltiplas animações a um único elemento separando-as por vírgula na propriedade abreviada `animation`.