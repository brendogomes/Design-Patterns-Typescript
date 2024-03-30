# Design Patterns

## O que são Design Patterns

- São soluções elegantes para problemas conhecidos e recorrentes no desenvolvimento de software.
- São divididos em 3 categorias:
    - Creational: visam abstrair o processo de como os objetos são criados.
    - Structural: Lidam com a composição de classes e objetos.
    - Behavioral: Caracterizam como as classes e objetos interagem e distribuem responsabilidades.

## Benefícios e problemas

- O que é bom:
    - Você não precisa reinventar a roda.
    - Padrões universais facilitam o entendimento do seu projeto.
    - Evita refatoração de código (conceito DRY - Don't repeat yourself).
    - Abstrai e nomeia partes particulares do projeto.
    - Ajuda na aplicação dos princípios do design orientado a objetos (SOLID).
    - Facilitam a criação de testes unitários.

- O que é ruim:
    - Alguns padrões podem ser complexos até que você os compreenda.
    - Muito código para atingir um objetivo simples.
    - Podem trazer otimizações prematuras para o seu código (YAGNI - You Ain't Gonna Need It).
    - Se usados incorretamente, podem atrapalhar ao invés de ajudar.

## Design Patterns abordados

- Creational
    - Abstract Factory
    - Factory Method
    - Builder
    - Prototype
    - Singleton
        - Intenção: garantir que uma classe tenha somente uma instância no programa e fornecer um ponto de acesso global para a mesma.
        - Geralmente usado para acesso a recursos compartilhados, como acesso à base de dados, interfaces gráficas, sistema de arquivos, servidores de arquivos, logger e mais.
        - Também usados para substituir variavéis globais, como em casos de uso de objetos de configurações do sistema como um todo.
        - Uma vantagem do Singleton é que podemos proteger a instância com encapsulamento, evitando que outro código sobrescreva seu valor.

        - Consequências boas:
            - Acesso controlado à instância única.
            - É fácil permitir um número maior de instâncias caso ele mude.
            - Usa Lazy instantiation, o Singleton só é criado no momento do uso.
            - Substitui variáveis globais.

        - Consequências ruins:
            - É mais difícil de testar.
            - Viola o princípio da responsabilidade única.
            - Requer tratamento especial em casos de concorrência.

- Structural
    - Adapter
    - Bridge
    - Composite
    - Decorator
    - Facade
    - Flyweight
    - Proxy

- Behavioral
    - Interpreter
    - Template Method
    - Chain of Responsibility
    - Iterator
    - Command
    - Mediator
    - Memento
    - Observer
    - State
    - Strategy
    - Visitor

## Princípios do design orientado a objetos (SOLID)

- Single Responsibility Principle (Princípio de responsabilidade única) - uma classe deve ter apenas um motivo para mudar.
- Open/Closed Principle (Princípio do aberto/fechado) - Classes, objetos e métodos devem estar abertos para extensão, mas fechados para modificações.
- Liskov Substitution Principle (Princípio da substituição de Liskov) - classes derivadas devem ser capazes de substituir totalmente classes base.
- Interface Segregation Principle (Princípio da segregação de interface) - os clientes não devem ser forçados a depender de interfaces que não utilizam.
- Dependency Inversion Principle (Princípio da inversão de dependência) - módulos de alto nível não devem ser dependentes do módulo de baixo nível; ambos devem depender de abstrações. Detalhes devem depender das abstrações, não o inverso.
