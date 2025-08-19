if (1 > 0) {
  let estudante = "Caroline";
  // se cria a variável com var, a variável é alterada lá fora do escopo do if
  // se é criada com let, se cria uma nova variável fora do escopo do if
  console.log(estudante);
}

estudante = "Ana";
console.log(estudante);
