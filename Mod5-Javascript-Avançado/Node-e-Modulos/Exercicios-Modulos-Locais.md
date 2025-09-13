Ótimo! Aqui estão 5 exercícios para você praticar a criação de módulos locais em JavaScript. A ideia é que cada exercício ajude a consolidar um conceito diferente.

### Exercício 1: Calculadora

1.  Crie um projeto e dois arquivos: `calculadora.js` e `app.js`.
2.  No arquivo **`calculadora.js`**:
      * Crie funções para **somar**, **subtrair**, **multiplicar** e **dividir** dois números.
      * Use `module.exports` para exportar essas quatro funções.
3.  No arquivo **`app.js`**:
      * Importe o módulo `calculadora.js`.
      * Chame as funções de soma, subtração, multiplicação e divisão com diferentes números.
      * Imprima o resultado de cada operação no console.

### Exercício 2: Gerador de Mensagens de Boas-vindas

* **Objetivo**: Criar um módulo que gera saudações personalizadas.
* **Instruções**:
    1.  Crie um arquivo chamado `saudacao.js`.
    2.  Implemente uma função `digaOi(nome)` que retorna a string `"Olá, " + nome + "!"`.
    3.  Implemente uma função `digaTchau(name)` que retorna a string `"Até logo, " + name + "!"`.
    4.  Exporte ambas as funções.
    5.  Crie um arquivo `app.js`, importe o módulo `saudacao.js` e use as funções para gerar saudações para diferentes nomes. Imprima os resultados.





### Exercício 3: Calculadora de Área e Perímetro

* **Objetivo**: Criar um módulo para cálculos geométricos.
* **Instruções**:
    1.  Crie um arquivo chamado `geomatria.js`.
    2.  Implemente as seguintes funções:
        * `calculaAreaRetangulo(altura, largura)`: Calcula a área de um retângulo.
        * `calculaPerimetroRetangulo(altura, largura)`: Calcula o perímetro de um retângulo.
        * `calculaAreaCirculo(raio)`: Calcula a área de um círculo. (Use `Math.PI`).
        * `calculaCircunferencia(raio)`: Calcula a circunferência de um círculo.
    3.  Exporte o módulo.
    4.  Crie um arquivo `app.js`, importe o módulo e use as funções para calcular a área e o perímetro de um retângulo de `10x5` e a área e circunferência de um círculo com raio `7`.



### Exercício 4: Módulo de Validação

* **Objetivo**: Criar um módulo que contenha funções para validar dados.
* **Instruções**:
    1.  Crie um arquivo chamado `validador.js`.
    2.  Implemente as seguintes funções de validação:
        * `verificaEmail(email)`: Retorna `true` se a string for um e-mail válido (use uma expressão regular simples ou uma verificação básica com `@`).
        * `verificaNumero(valor)`: Retorna `true` se o valor for um número.
        * `verificaNome(valor)`: Retorna `true` se o valor for uma string.
        * `verificaSenha(senha)`: Retorna `true` se o a senha possuir pelo menos 8 digitos e incluir pelo menos 1 letra e 1 numero
    3.  Exporte o módulo.
    4.  Crie um arquivo `app.js` e importe o `validador.js`.
    5.  Teste as funções com diferentes valores (ex: `"test@test.com"`, `123`, `"olá"`, `null`) e imprima os resultados.