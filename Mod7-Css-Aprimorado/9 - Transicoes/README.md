# Transições CSS (`transition`)

As **Transições CSS** oferecem uma maneira de controlar a velocidade com que uma propriedade CSS muda de um valor para outro, permitindo que a alteração seja suave e gradual, em vez de instantânea.

## 1\. O Conceito Fundamental

Uma transição ocorre quando um elemento muda de um **estado inicial** para um **estado final** (geralmente acionado por uma interação, como um `:hover`). O CSS calcula e renderiza os *frames* intermediários durante um período de tempo definido, criando o efeito de movimento.

**Transições requerem dois elementos essenciais:**

1.  **A Propriedade a Mudar:** Qual propriedade CSS será animada (ex: `opacity`, `width`, `color`).
2.  **O Gatilho:** Uma mudança de estado que inicie a transição (ex: `:hover`, `:focus`, ou adição/remoção de uma classe via JavaScript).

## 2\. Propriedades Chave de `transition`

A transição é controlada por quatro sub-propriedades que são geralmente aplicadas no **estado inicial** do elemento.

| Propriedade | Função | Valores Comuns |
| :--- | :--- | :--- |
| **`transition-property`** | Define **o que** será animado. | `width`, `background-color`, `opacity`, `all` (tudo). |
| **`transition-duration`** | Define **quanto tempo** a transição leva. | `0.5s`, `500ms`. |
| **`transition-timing-function`** | Define a **curva de velocidade** (aceleração). | `ease`, `linear`, `ease-in-out`. |
| **`transition-delay`** | Define **quanto tempo** esperar antes de começar. | `0s`, `1s`. |

-----

## 3\. A Função de Temporização (`timing-function`)

Esta propriedade é crucial para dar personalidade ao movimento. Ela define a velocidade da transição ao longo de sua duração.

  * **`ease` (Padrão):** Começa lento, acelera no meio e desacelera no final.
  * **`linear`:** Mantém uma velocidade constante do início ao fim.
  * **`ease-in`:** Começa lento e acelera.
  * **`ease-out`:** Começa rápido e desacelera no final.
  * **`ease-in-out`:** Começa lento, acelera e termina lento (mais suave que `ease`).
  * **`cubic-bezier(n, n, n, n)`:** Permite criar sua própria curva de velocidade.

-----

## 4\. Sintaxe e Exemplos Práticos

A melhor prática é usar a **sintaxe abreviada** para maior clareza.

### Exemplo 1: Transição de Cor e Tamanho

Este exemplo demonstra a mudança de cor de fundo e largura ao passar o mouse.

```css
/* 1. ESTADO INICIAL (Define o comportamento da transição) */
.botao {
  background-color: #007bff;
  width: 150px;
  height: 50px;
  
  /* Sintaxe Abreviada: propriedade | duração | timing-function | delay */
  transition: width 0.3s ease-out, background-color 0.5s linear;
}

/* 2. ESTADO FINAL (O Gatilho: Quando o mouse está sobre o botão) */
.botao:hover {
  background-color: #28a745; /* Muda para verde */
  width: 250px; /* Aumenta a largura */
}

/* Nota: A largura usa uma transição rápida (0.3s, ease-out) e a cor uma transição mais lenta (0.5s, linear). */
```

### Exemplo 2: Usando `all` (Tudo)

Se você quiser que *todas* as propriedades que mudarem sejam transicionadas com o mesmo tempo e efeito, use o valor `all`.

```css
.card {
  opacity: 0.8;
  transform: scale(1);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  
  /* Aplica a transição de 0.4s para TODAS as propriedades que mudarem */
  transition: all 0.4s ease-in-out; 
}

.card:hover {
  opacity: 1; /* Transiciona */
  transform: scale(1.05); /* Transiciona (Aumenta ligeiramente) */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3); /* Transiciona */
}
```

-----

## 5\. Limitações das Transições

  * **Necessitam de um Gatilho:** Transições não podem ser iniciadas automaticamente; elas dependem de uma mudança de estado (ex: `:hover` ou JS). Para movimentos que se repetem ou iniciam imediatamente, use **`animation` + `@keyframes`**.
  * **Apenas 2 Estados:** Elas só podem lidar com o estado **A (inicial)** e o estado **B (final)**. Não é possível definir estados intermediários (como 0%, 50%, 100%).
  * **Nem Tudo é Transicionável:** Apenas as propriedades que têm valores numéricos ou de cor intermediários definíveis podem ser transicionadas (ex: `display: none` para `block` não pode ser transicionado).