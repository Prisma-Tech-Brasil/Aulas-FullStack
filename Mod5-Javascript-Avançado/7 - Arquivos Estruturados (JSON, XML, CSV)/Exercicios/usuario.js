// Exemplo utilizando Node.js
const fs = require('fs');

// Ler o arquivo JSON de forma síncrona
const conteudoArquivo = fs.readFileSync('usuario.json', 'utf-8');
const usuarioObj = JSON.parse(conteudoArquivo);

// Adicionar um novo tema à lista
usuarioObj.temasFavoritos.push("CSS");

// Exibir o resultado
console.log("Usuário atualizado:", JSON.stringify(usuarioObj, null, 2));