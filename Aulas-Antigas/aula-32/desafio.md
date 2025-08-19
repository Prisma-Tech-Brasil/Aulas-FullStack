# Desafio: Criando uma Nova Rota com Express

## Objetivo
Criar uma nova rota utilizando o método `POST` para adicionar um novo usuário.

## Instruções
1. Crie uma rota no seu servidor Express que atenda ao caminho `/usuarios`.
2. A rota deve utilizar o método `POST`.
3. O corpo da requisição (`req.body`) deve conter as seguintes informações:
  - `nome` (string)
  - `email` (string)
  - `cpf` (string)
4. Ao receber os dados, a rota deve apenas retornar uma mensagem de sucesso com os dados enviados no corpo da resposta.

## Exemplo de Requisição
```json
POST /usuarios
Content-Type: application/json

{
  "nome": "João Silva",
  "email": "joao.silva@email.com",
  "cpf": "123.456.789-00"
}
```

## Exemplo de Resposta
```json
{
  "mensagem": "Usuário criado com sucesso!",
  "usuario": {
   "nome": "João Silva",
   "email": "joao.silva@email.com",
   "cpf": "123.456.789-00"
  }
}
```

Boa sorte!