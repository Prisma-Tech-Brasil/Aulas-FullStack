# Desafio: Verificação de Campos na Rota de Criação de Usuário

## Objetivo
Implementar uma verificação na rota de criação de usuário para garantir que os campos `nome`, `email` e `cpf` estejam presentes no `req.body`.

## Instruções
1. Crie uma rota POST para `/usuarios` no seu servidor.
2. Antes de processar a criação do usuário, verifique se os campos `nome`, `email` e `cpf` estão presentes no corpo da requisição (`req.body`).
3. Caso algum dos campos esteja ausente, retorne uma resposta com:
  - Status HTTP `400` (Bad Request).
  - Um JSON com a mensagem: `"Todos os campos (nome, email, cpf) são obrigatórios."`
4. Caso todos os campos estejam presentes, prossiga com a lógica de criação do usuário.

## Exemplo de Requisição
### Requisição válida:
```json
POST /usuarios
{
  "nome": "João Silva",
  "email": "joao.silva@email.com",
  "cpf": "123.456.789-00"
}
```

### Requisição inválida:
```json
POST /usuarios
{
  "nome": "João Silva",
  "email": "joao.silva@email.com"
}
```

### Resposta para requisição inválida:
```json
{
  "erro": "Todos os campos (nome, email, cpf) são obrigatórios."
}
```

## Dicas
- Utilize `if` para verificar a presença dos campos no `req.body`.
- Retorne a resposta com `res.status(400).json(...)` em caso de erro.
- Certifique-se de que o servidor está configurado para interpretar JSON no corpo da requisição (`express.json()`).

Boa sorte!