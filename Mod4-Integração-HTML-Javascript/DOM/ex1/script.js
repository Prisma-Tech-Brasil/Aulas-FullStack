// 1. Seleciona os elementos HTML
const contadorElemento = document.getElementById('contador');
const botaoDiminuir = document.getElementById('botao-diminuir');
const botaoAumentar = document.getElementById('botao-aumentar');

// 2. Variável para armazenar o valor do contador
let contador = 0;

// 3. Adiciona um ouvinte de evento para o botão de aumentar
botaoAumentar.addEventListener('click', () => {
    contador++; // Incrementa o valor
    contadorElemento.textContent = contador; // Atualiza o texto na tela

    // 4. (Desafio Extra) Mudar a cor com base no valor
    if (contador > 0) {
        contadorElemento.style.color = 'green';
    } else if (contador < 0) {
        contadorElemento.style.color = 'red';
    } else {
        contadorElemento.style.color = 'black';
    }
});

// 5. Adiciona um ouvinte de evento para o botão de diminuir
botaoDiminuir.addEventListener('click', () => {
    contador--; // Decrementa o valor
    contadorElemento.textContent = contador; // Atualiza o texto na tela

    // 6. (Desafio Extra) Mudar a cor com base no valor
    if (contador > 0) {
        contadorElemento.style.color = 'green';
    } else if (contador < 0) {
        contadorElemento.style.color = 'red';
    } else {
        contadorElemento.style.color = 'black';
    }
});