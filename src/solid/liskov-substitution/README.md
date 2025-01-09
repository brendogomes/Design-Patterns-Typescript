### Liskov Substitution Principle:

O Princípio da Substituição de Liskov (Liskov Substitution Principle) do SOLID afirma que "os objetos de uma classe derivada devem ser substituíveis por objetos da classe base sem alterar o comportamento correto do programa". Em outras palavras, você deve ser capaz de usar qualquer classe filha no lugar de sua classe pai sem introduzir erros ou comportamentos inesperados.


### Cenário do exemplo:

Vamos ilustrar esse princípio com um exemplo de figuras geométricas (como Rectangle e Square). Um quadrado é uma especialização de um retângulo, mas o comportamento de um quadrado deve ser compatível com o de um retângulo, para que possamos substituir um retângulo por um quadrado sem quebrar o código.

### Benefícios do Liskov Substitution Principle:

- Substituibilidade: Você pode substituir uma classe base por suas subclasses sem que o comportamento do sistema seja alterado de forma indesejada.
- Previsibilidade: O código continua funcionando como esperado, independentemente de substituir um objeto da classe base por uma classe derivada.
- Menos Erros: Isso reduz o risco de introduzir erros inesperados ao substituir classes ou modificar comportamentos.