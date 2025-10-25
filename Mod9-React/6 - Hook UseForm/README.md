##  React Hook Form

O React Hook Form simplifica o gerenciamento de estado e a validação de formulários, utilizando principalmente o conceito de componentes não controlados, o que melhora a performance.

-----

### Passo 1: Instalação

Primeiro, você precisa instalar a biblioteca no seu projeto.

```bash
npm install react-hook-form
# ou
yarn add react-hook-form
```

### Passo 2: Inicializar o Hook `useForm`

Dentro do seu componente React, importe e inicialize o `useForm()`. Você vai desestruturar as funções principais.

```javascript
import { useForm } from 'react-hook-form';

function MeuFormulario() {
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm();
  
  // ... resto do componente
}
```

### Passo 3: Registrar os Campos (`register`)

Utilize a função `register` para vincular os elementos de input do seu formulário ao React Hook Form. Isso substitui a necessidade de usar `useState` e `onChange` para cada campo.

```javascript
return (
  <form>
    {/* O spread operator {...} conecta o input ao RHF */}
    <input type="text" {...register("nomeDoCampo")} />
  </form>
);
```

### Passo 4: Lidar com a Submissão (`handleSubmit`)

O `handleSubmit` é uma função de alta ordem que gerencia o evento de submissão do formulário. Ele recebe a sua função de envio (`onSubmit`) como argumento.

1.  **Defina sua função `onSubmit`:** Esta função só será chamada se as validações passarem. Os dados do formulário serão passados como um objeto.

    ```javascript
    const onSubmit = (data) => {
      console.log("Dados do formulário:", data);
      // Aqui você enviaria os dados para uma API
    };
    ```

2.  **Vincule ao formulário:**

    ```javascript
    return (
      // O RHF cuida do event.preventDefault()
      <form onSubmit={handleSubmit(onSubmit)}> 
        {/* ... inputs */}
        <button type="submit">Enviar</button>
      </form>
    );
    ```

### Passo 5: Adicionar Validações

Você pode passar regras de validação diretamente para a função `register`.

| Regra | Descrição | Exemplo |
| :--- | :--- | :--- |
| `required` | Torna o campo obrigatório. | `{ required: "Este campo é obrigatório" }` |
| `minLength` | Comprimento mínimo de caracteres. | `{ minLength: 5 }` |
| `maxLength` | Comprimento máximo de caracteres. | `{ maxLength: 20 }` |
| `pattern` | Validação com Expressão Regular. | `{ pattern: /.../ }` |

**Exemplo de validação no campo:**

```javascript
<input 
  type="email" 
  {...register("email", { 
    required: "O e-mail é obrigatório",
    pattern: {
      value: /^\S+@\S+$/i, // Regex simples para e-mail
      message: "Formato de e-mail inválido"
    } 
  })} 
/>
```

### Passo 6: Exibir Mensagens de Erro

Use o objeto `errors` (que desestruturamos do `useForm`) para exibir mensagens de erro abaixo dos campos, baseando-se no nome do campo.

```javascript
{errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
```

-----

### Exemplo Completo

```javascript
import { useForm } from 'react-hook-form';

function FormularioCompleto() {
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm();

  const onSubmit = (data) => {
    console.log("Formulário Válido, Dados:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Nome de Usuário</label>
        <input 
          type="text" 
          {...register("usuario", { 
            required: "O nome de usuário é obrigatório.",
            minLength: { value: 3, message: "Mínimo de 3 caracteres." }
          })} 
        />
        {errors.usuario && <p style={{ color: 'red' }}>{errors.usuario.message}</p>}
      </div>
      
      <button type="submit">Cadastrar</button>
    </form>
  );
}
```