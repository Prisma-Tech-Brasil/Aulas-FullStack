async function buscarDados() {
  try {
    const resultado = await obterDados();
    console.log(resultado);
  } catch (erro) {
    console.error("Erro:", erro);
  }
}

buscarDados();
