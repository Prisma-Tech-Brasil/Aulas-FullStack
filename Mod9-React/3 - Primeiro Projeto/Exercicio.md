# Exercicios

1.  **Crie um terceiro `ProfileCard`** no `App.jsx` com suas próprias informações e foto.
2.  **Use Desestruturação de Props:** No arquivo `ProfileCard.jsx`, altere a assinatura da função para usar desestruturação, tornando o código mais limpo:
    ```jsx
    // src/components/ProfileCard.jsx - DESAFIO: Alterar de (props) para:

    const ProfileCard = ({ nome, profissao, idade, fotoUrl }) => {
        // ... agora use diretamente 'nome', 'profissao', etc. sem o "props."
    };
    ```
3.  **Crie um componente `<Badge>`:** Crie um novo componente chamado `Badge.jsx` que receba uma `prop` chamada `cor` e outra chamada `texto`, e exiba um pequeno `<span>` estilizado. Depois, incorpore esse `Badge` dentro do `ProfileCard` para indicar o status do usuário (ex: "Online", "Ocupado").   