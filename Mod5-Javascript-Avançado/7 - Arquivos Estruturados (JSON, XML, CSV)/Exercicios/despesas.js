// Exemplo utilizando Node.js
const despesas = require('./despesas.json');

// 1. Somar o total de transações
const totalGasto = despesas.transacoes.reduce((soma, transacao) => soma + transacao.valor, 0);

// 2. Criar objeto de resumo
const resumoFinanceiro = {
  mes: despesas.mes,
  ano: despesas.ano,
  totalDespesas: totalGasto
};

console.log("Resumo Financeiro:", JSON.stringify(resumoFinanceiro, null, 2));