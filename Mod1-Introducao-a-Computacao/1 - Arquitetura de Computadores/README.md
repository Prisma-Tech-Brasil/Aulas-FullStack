# Aula 01 - Arquitetura de Computadores

## O que é um computador?
A palavra "computador" vem do verbo "computar", que significa "calcular". A criação de computadores pode ser pensada a partir da antiguidade, quando a relação de contar já intrigava os homens.

* O **ábaco**, instrumento mecânico de origem chinesa do século V a.C., é considerado o "primeiro computador", uma espécie de calculadora que realizava operações algébricas.
* No século XVII, o matemático escocês **John Napier** inventou a "régua de cálculo".
* Em 1640, o matemático francês **Pascal** inventou a primeira máquina de calcular automática.
* A primeira calculadora de bolso foi criada por **Gottfried Wilhelm Leibniz**.
* A primeira máquina mecânica programável foi introduzida por **Joseph-Marie Jacquard**, um tipo de tear que controlava a confecção de tecidos através de cartões perfurados.
* **George Boole** (1815-1864) fundou a lógica matemática, que se tornou uma ferramenta poderosa no estudo de circuitos eletrônicos e arquitetura de computadores.
* No século XIX, o matemático inglês **Charles Babbage** criou uma máquina analítica comparada com o computador atual, com memória e programas, e por isso é considerado o "Pai da Informática".

---

## Evolução dos Computadores

### The Bombe - Alan Turing
A **"The Bombe"** foi uma máquina eletromecânica criada em 1941 pelos matemáticos da Station X para decifrar a **máquina Enigma**, usada pelos alemães para criptografar mensagens.

### Gerações
* **Primeira Geração (1951-1959):** Computadores funcionavam com circuitos e válvulas eletrônicas, sendo imensos e consumindo muita energia. Um exemplo é o ENIAC.
* **Segunda Geração (1959-1965):** Ainda grandes, funcionavam com **transistores** que substituíram as válvulas, sendo menores e mais rápidos. O uso comercial começou a se espalhar nesse período.
* **Terceira Geração (1965-1975):** Utilizavam **circuitos integrados** que substituíram os transistores. Os chips foram criados, e o uso de computadores pessoais começou.
* **Quarta Geração (1975-até os dias atuais):** Com o desenvolvimento da tecnologia, os computadores diminuíram de tamanho, e a velocidade e capacidade de processamento aumentaram. Foram incluídos os microprocessadores, e a partir da década de 90 houve uma grande expansão dos computadores pessoais.

---

## Software vs. Hardware

### Hardware
Hardware são as peças físicas de um computador, como placas, monitor, teclado, placa-mãe e disco rígido. Eles são divididos em quatro elementos:
* **Dispositivos de entrada:** componentes que o usuário conecta, como teclado e mouse.
* **Dispositivos de saída:** traduzem os dados recebidos para o usuário, como monitor e caixas de som.
* **Componentes internos:** peças que se conectam para o computador funcionar.
* **Dispositivos de armazenamento secundário:** armazenam dados permanentemente, como HD e SSD.

### Software
Software representa as instruções que um computador recebe para executar tarefas, utilizando códigos e linguagem de programação. Eles são classificados em duas formas:
* **Software de sistema:** programas que permitem a interação do usuário com a máquina (ex: Windows, Linux).
* **Software de aplicativo:** programas de uso cotidiano que permitem realizar tarefas (ex: editores de texto, planilhas, navegadores).

---

## CPUs
A sigla CPU significa **Unidade Central de Processamento** (Central Process Unit). É o principal item de hardware, também conhecido como **processador**, responsável por calcular e realizar tarefas. Uma CPU é feita de bilhões de **transistores**.

### Como dividir a CPU?
* **Unidade de Controle (UC):** Comanda as ações no computador, garantindo que os processos sejam executados corretamente.
* **ULA (Unidade Lógica e Aritmética):** Realiza cálculos matemáticos e operações lógicas na CPU.
* **Registradores:** Área de armazenamento de "baixo nível" que guarda informações intermediárias e fundamentais para a CPU.
* **Núcleos (Cores):** Unidades de processamento que executam instruções. Quanto maior o número de núcleos, maior a capacidade de multitarefa.
* **Threads:** Linhas de instruções que organizam os processos para serem executados pelos núcleos. Quanto mais núcleos, mais threads existem.

### Ciclos de Instrução
Os ciclos de instrução são o processo no qual o processador executa as tarefas. São divididos em quatro etapas:
1.  **Busca (Fetch):** A CPU busca instruções na memória RAM e as copia para a memória cache.
2.  **Decodificação (Decode):** Os dados são interpretados para que os núcleos os entendam.
3.  **Execução:** As instruções e os dados são executados pelos núcleos.
4.  **Escrita:** Os resultados das instruções são armazenados de volta na memória RAM.

### Velocidade da CPU
A velocidade da CPU é medida em Mhz ou Ghz, descrevendo o número máximo de cálculos por segundo que o processador pode executar. A frequência é conhecida como **"clock do processador"**.

### Overclock e Undervolt
* **Overclock:** Técnica para aumentar a frequência e o desempenho dos processadores.
* **Undervolt:** Procedimento para diminuir a tensão das CPUs, reduzindo a temperatura e, às vezes, melhorando o desempenho.

*OBS.:* A CPU não deve ser confundida com o gabinete, que é apenas a estrutura de proteção dos componentes internos.

---

## Memórias Primárias vs. Secundárias
* **Memórias Primárias (Reais):** O processador as acessa diretamente. Exemplos: RAM, ROM, Registradores e CACHE.
* **Memórias Secundárias:** Não podem ser acessadas diretamente; as informações devem ser enviadas para uma memória primária antes. Exemplos: HD, SSD, CD, DVD.

### Memória RAM vs. Memória ROM
A **Memória RAM** (Memória de Acesso Aleatório) é um tipo de memória volátil, o que significa que perde os dados ao ser desligada. Sua principal função é fornecer armazenamento temporário para dados e programas em uso. A característica "acesso aleatório" permite que qualquer byte de memória seja acessado diretamente, o que é essencial para o funcionamento eficiente de programas.

---

## O que são Transistores?
Os transistores têm duas funções: amplificar a corrente elétrica ou barrar sua passagem. Eles são feitos de **materiais semicondutores** e estão presentes nos **circuitos integrados**, que compõem as **portas lógicas**.

## O que são Portas Lógicas?
Portas lógicas são blocos fundamentais que, combinados, dão origem aos circuitos lógicos. Elas podem ter várias entradas, mas apenas uma saída por vez.

---

## Métodos de Tradução: Interpretador e Compilador

### O que é um Compilador?
Um compilador é um sistema que traduz um programa de uma linguagem de alto nível para uma de linguagem simbólica. Ele analisa o código-fonte, verifica erros e depois o "traduz" para linguagem de máquina, gerando um novo arquivo pronto para ser executado. Exemplos: GCC e NetBeans.

### O que é um Interpretador?
Diferente do compilador, o interpretador não "traduz" o programa inteiro. Ele converte o código-fonte para linguagem de máquina linha por linha, em tempo real. Isso permite detectar erros mais facilmente.

### Comparação
* **Compilador:** Traduz o código inteiro de uma vez para outra linguagem (normalmente de alto nível para baixo nível). A tradução não precisa ser feita novamente a menos que o código seja alterado.
* **Interpretador:** Converte o código aos poucos, sempre que uma declaração ou função é executada.

---

## O que são Algoritmos?
Um algoritmo é uma sequência de raciocínios, instruções ou operações para alcançar um objetivo. Os passos precisam ser finitos e operados sistematicamente. Algoritmos utilizam **variáveis** e **comandos de repetição** para funcionar.