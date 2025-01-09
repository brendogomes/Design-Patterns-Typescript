### Dependency Inversion Principle:

A Inversão de Dependência (Dependency Inversion) é um dos princípios do SOLID, que sugere que as classes de alto nível não devem depender de classes de baixo nível, mas ambas devem depender de abstrações. Além disso, as abstrações não devem depender de detalhes concretos, mas os detalhes concretos devem depender das abstrações.


### Cenário do exemplo:

Suponha que você tenha um sistema de pagamento que pode ser feito via Cartão de Crédito ou PayPal. O sistema de pagamento de alto nível não deve depender diretamente de implementações concretas, mas sim de abstrações.

### Benefícios do Princípio de Inversão de Dependência:

- Flexibilidade: Você pode facilmente adicionar novos métodos de pagamento sem precisar alterar o código da classe PaymentService.
- Testabilidade: Você pode facilmente criar mocks ou stubs para as implementações de IPaymentMethod ao testar a classe PaymentService.
- Manutenibilidade: O código é mais fácil de manter, já que as classes de alto nível não estão acopladas a implementações de baixo nível. Isso facilita a alteração ou substituição de comportamentos sem quebrar o código existente.