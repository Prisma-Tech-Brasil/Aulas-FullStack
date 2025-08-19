const http = require("http");
const url = require("url");

function rotas(request, response) {
  const URL = url.parse(request.url, true);

  if (request.method === "GET" && URL.pathname === "/") {
    response.writeHead(200, { "Content-Type": "text/plain" });
    return response.end("Olá mundo!");
  }

  response.writeHead(404, { "Content-Type": "text/plain" });
  response.end("Rota não encontrada");
}

const server = http.createServer(rotas);
server.listen(3000, () => console.log("Servidor rodando!"));

/* 
Criar uma rota para vizualizar a lista de alunos
*/