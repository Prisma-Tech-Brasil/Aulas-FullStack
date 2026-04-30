### Exercício 1: Calculadora

1.  Crie um projeto e dois arquivos: `calculadora.js` e `app.js`.
2.  No arquivo **`calculadora.js`**:
      * Crie funções para **somar**, **subtrair**, **multiplicar** e **dividir** dois números.
      * Use `module.exports` para exportar essas quatro funções.
3.  No arquivo **`app.js`**:
      * Importe o módulo `calculadora.js`.
      * Chame as funções de soma, subtração, multiplicação e divisão com diferentes números.
      * Imprima o resultado de cada operação no console.

---
### Exercício 2: Gerador de Mensagens de Boas-vindas

* **Objetivo**: Criar um módulo que gera saudações personalizadas.
* **Instruções**:
    1.  Crie um arquivo chamado `saudacao.js`.
    2.  Implemente uma função `digaOi(nome)` que retorna a string `"Olá, " + nome + "!"`.
    3.  Implemente uma função `digaTchau(name)` que retorna a string `"Até logo, " + name + "!"`.
    4.  Exporte ambas as funções.
    5.  Crie um arquivo `app.js`, importe o módulo `saudacao.js` e use as funções para gerar saudações para diferentes nomes. Imprima os resultados.


---



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
---

### Exercício 4: Manipulador de Strings

* **Objetivo**: Criar um módulo para manipular textos, fornecendo funções úteis para operações com strings.
* **Instruções**:
    1.  Crie um arquivo chamado `manipulador.js`.
    2.  Implemente as seguintes funções:
        * `inverterString(texto)`: Recebe uma string e a retorna invertida. Por exemplo, "javascript" se torna "tpircsavaj".
        * `contarCaracteres(texto)`: Recebe uma string e retorna o número de caracteres que ela contém.
    3.  Exporte ambas as funções usando `module.exports`.
    4.  Crie um arquivo `app.js`, importe o módulo `manipulador.js` e use as funções para manipular strings de sua escolha. Imprima os resultados no console para verificar a saída.

---
### Exercício 5: Conversor de Unidades

* **Objetivo**: Desenvolver um módulo para converter diferentes unidades de medida.
* **Instruções**:
    1.  Crie um arquivo chamado `conversor.js`.
    2.  Implemente as seguintes funções:
        * `celsiusParaFahrenheit(celsius)`: Converte uma temperatura de Celsius para Fahrenheit. A fórmula é `(celsius * 9/5) + 32`.
        * `quilogramasParaLibras(quilogramas)`: Converte uma massa de quilogramas para libras. A fórmula é `quilogramas * 2.20462`.
    3.  Exporte as duas funções.
    4.  Crie um arquivo `app.js`, importe o módulo `conversor.js` e use as funções para converter temperaturas e massas. Imprima os resultados no console.
