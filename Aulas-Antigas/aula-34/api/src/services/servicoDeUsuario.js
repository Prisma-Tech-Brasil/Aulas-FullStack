const repositorioDeUsuario = require("../repositories/repositorioDeUsuario");

exports.buscarTodos = async () => await repositorioDeUsuario.buscarTodos();

exports.criar = async (nome, email, cpf) => {
  // Poderia verificar se email e cpf já existem
  // À medida que o projeto cresce, é aqui que você colocaria regras de negócio
  const id = Math.random().toString(36).substring(2, 10); // Gambiarra elegante para gerar ID
  const usuario = { id, nome, email, cpf };

  return await repositorioDeUsuario.criar(usuario);
}