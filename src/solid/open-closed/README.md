### Open-Closed:

O Princípio Aberto-Fechado (Open-Closed Principle) do SOLID afirma que "uma classe deve ser aberta para extensão, mas fechada para modificação". Em outras palavras, você deve ser capaz de adicionar novos comportamentos a uma classe existente sem alterar o código original dessa classe. Isso promove a reutilização de código e facilita a manutenção e evolução do software sem risco de quebrar funcionalidades já existentes.


### Cenário do exemplo:

Vamos imaginar que estamos criando um sistema de calculadoras de descontos para uma loja, e cada tipo de cliente pode ter um tipo de desconto diferente (por exemplo, cliente regular e cliente VIP). O princípio Open-Closed vai nos ajudar a adicionar novos tipos de clientes e seus respectivos descontos sem modificar o código existente, apenas estendendo o comportamento.

### Benefícios do Liskov Substitution Principle:

- Extensibilidade sem risco: Novos comportamentos podem ser adicionados sem afetar o código existente.
- Maior segurança na manutenção: Menor risco de introduzir bugs ao modificar o sistema.
- Facilidade para adicionar novos requisitos: Novas funcionalidades podem ser adicionadas de maneira ágil e segura.
- Códigos mais modulares: O sistema se torna mais flexível, organizado e modular.
- Testabilidade: O código fica mais fácil de testar, uma vez que as funcionalidades novas podem ser isoladas em testes.