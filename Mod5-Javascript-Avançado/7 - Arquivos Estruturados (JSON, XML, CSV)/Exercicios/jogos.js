// Exemplo utilizando Node.js (ou importe os dados conforme seu ambiente)
const jogos = require('./jogos.json');

// 1. Filtrar jogos em estoque
const estoqueDisponivel = jogos.filter(jogo => jogo.emEstoque);

// 2. Calcular preço médio
const totalPreco = estoqueDisponivel.reduce((acumulador, jogo) => acumulador + jogo.preco, 0);
const precoMedio = totalPreco / estoqueDisponivel.length;

console.log("Jogos disponíveis:", estoqueDisponivel.map(j => j.titulo));
console.log(`Preço médio: R$ ${precoMedio.toFixed(2)}`);