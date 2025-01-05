
# Design Patterns

Design patterns são soluções reutilizáveis para problemas comuns que surgem durante o desenvolvimento de software. Eles são abordagens generalizadas, baseadas em experiências e boas práticas, que podem ser aplicadas em diferentes contextos e situações de programação. Os padrões de design ajudam a criar sistemas mais flexíveis, escaláveis e de fácil manutenção, evitando a necessidade de reinventar a roda a cada novo projeto.

# SOLID

#### S - Single Responsibility Principle (SRP) / Princípio da Responsabilidade Única

Cada classe ou módulo deve ter uma única responsabilidade. Em outras palavras, uma classe deve ser responsável por uma única parte da funcionalidade do sistema e deve ter um único motivo para ser modificada. Isso facilita a manutenção e o entendimento do código, além de promover a coesão.

Exemplo: Imagine uma classe que lida com a leitura e gravação de arquivos e, ao mesmo tempo, realiza processamento de dados. Aqui, a classe tem duas responsabilidades: I/O de arquivos e processamento. O SRP recomendaria dividir essas responsabilidades em duas classes distintas.

#### O - Open/Closed Principle (OCP) / Princípio Aberto/Fechado

As classes devem ser abertas para extensão, mas fechadas para modificação. Ou seja, você deve ser capaz de adicionar novas funcionalidades a uma classe (ou sistema) sem alterar seu código existente. Isso pode ser alcançado com o uso de herança, interfaces ou composição.

Exemplo: Se você tem uma classe que calcula o preço de produtos e deseja adicionar novos tipos de desconto, em vez de modificar a classe original, você pode estendê-la ou usar uma estratégia para calcular os descontos. Isso mantém o código original "fechado" para alterações, mas "aberto" para novas funcionalidades.

#### L - Liskov Substitution Principle (LSP) / Princípio da Substituição de Liskov

Se uma classe B é uma subclasse de A, então objetos de A podem ser substituídos por objetos de B sem alterar o comportamento esperado do sistema. Isso significa que as subclasses devem ser substituíveis por suas classes base sem causar erros ou comportamentos indesejados.

Exemplo: Se você tem uma classe Carro e uma subclasse CarroElétrico, um objeto do tipo Carro deve ser capaz de ser substituído por um objeto do tipo CarroElétrico sem que o sistema quebre. Isso exige que a subclasse respeite a interface ou o comportamento esperado da classe base.

#### I - Interface Segregation Principle (ISP) / Princípio da Segregação de Interface

Uma classe não deve ser forçada a depender de métodos que não usa. Em vez de ter uma interface única e grande, você deve criar interfaces mais específicas e pequenas para que as classes implementem apenas os métodos de que realmente precisam.

Exemplo: Se você tem uma interface Animal com métodos como voar(), nadar() e correr(), uma classe Cachorro não deveria ser obrigada a implementar o método voar(), já que ele não voa. Em vez disso, você pode criar interfaces como Nadador e Corredor para garantir que cada classe implemente apenas os métodos que fazem sentido para ela.

#### D - Dependency Inversion Principle (DIP) / Princípio da Inversão de Dependência

Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstrações (interfaces ou classes abstratas). Além disso, as abstrações não devem depender de detalhes, mas os detalhes devem depender das abstrações.

Exemplo: Em vez de uma classe Pedido depender diretamente de uma classe BancoDeDados, ela deve depender de uma abstração (como uma interface Repositorio). Isso permite que você altere a implementação do banco de dados sem modificar a lógica de negócio da classe Pedido.
