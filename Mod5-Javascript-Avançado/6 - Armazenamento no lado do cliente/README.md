# Resumo: Armazenamento no Navegador 

Este guia resume as principais formas de salvar dados diretamente no navegador do usuário utilizando JavaScript.

## 1. Web Storage API

A Web Storage API fornece mecanismos simples para armazenar pares de **chave: valor**.

#### **LocalStorage**

Os dados não expiram. Eles permanecem salvos até que o usuário limpe o cache ou o programador os remova.

* **Capacidade:** ~5MB a 10MB.
* **Uso:** Preferências de sistema, itens num carrinho de compras.

#### **SessionStorage**

Os dados são mantidos apenas enquanto a **aba/janela** estiver aberta.

* **Capacidade:** ~5MB.
* **Uso:** Dados temporários de navegação.

## 2. Comandos Principais (Sintaxe)

Tanto para `localStorage` quanto para `sessionStorage`, os métodos são os mesmos:

| Ação | Código JavaScript |
| --- | --- |
| **Salvar item** | `localStorage.setItem('chave', 'valor');` |
| **Ler item** | `localStorage.getItem('chave');` |
| **Remover item** | `localStorage.removeItem('chave');` |
| **Limpar tudo** | `localStorage.clear();` |

> **Nota:** O Web Storage só armazena **Strings**. Para salvar objetos ou arrays, use `JSON.stringify()` ao salvar e `JSON.parse()` ao ler.

---

## 3. Exemplo de Código: Modo Escuro

```javascript
const botaoTema = document.querySelector('#toggle-theme');

// 1. Verifica se já existe uma preferência salva ao carregar a página
const temaSalvo = localStorage.getItem('tema');
if (temaSalvo === 'dark') {
    document.body.classList.add('dark-mode');
}

// 2. Salva a nova escolha do usuário
botaoTema.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('tema', 'dark');
    } else {
        localStorage.setItem('tema', 'light');
    }
});

```

## 4. Cookies vs Web Storage

* **Cookies:** Pequenos (4KB), podem ter data de validade e são enviados ao servidor.
* **Web Storage:** Maiores, mais modernos, ficam apenas no cliente (navegador).

---

**Dica para os alunos:** Vocês podem visualizar esses dados no navegador pressionando `F12` -> aba **Aplicativo (Application)** -> **Armazenamento Local (Local Storage)**.
