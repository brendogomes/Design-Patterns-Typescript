### Interface Segregation Principle:

O princípio de Segregação de Interface (Interface Segregation Principle) do SOLID afirma que "nenhuma classe deve ser forçada a depender de métodos que não utiliza". Em outras palavras, é melhor ter várias interfaces específicas, ao invés de uma única interface grande e genérica.


### Cenário do exemplo:

Vamos usar um exemplo de dispositivos de impressão. Suponha que você tem uma classe Printer que deve ser capaz de imprimir, escanear e copiar documentos, mas não é todo dispositivo que pode fazer todas essas operações.

### Benefícios do Princípio de Segregação de Interface:

- Evita sobrecarga de métodos: Como as interfaces são pequenas e específicas, uma classe só precisa implementar os métodos que realmente faz sentido para ela. Isso evita que classes sejam obrigadas a implementar métodos desnecessários.
- Facilidade de manutenção: Se uma interface for modificada, você só impacta as classes que realmente a utilizam. Isso torna o código mais modular e fácil de manter.
- Maior coesão e clareza: Cada interface tem uma responsabilidade clara, tornando o código mais fácil de entender e mais coeso.