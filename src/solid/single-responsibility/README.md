### Single Responsibility Principle:

O Single Responsibility Principle afirma que uma classe deve ter apenas uma razão para mudar. Em outras palavras, cada classe deve ser responsável por uma única parte da funcionalidade do sistema.

Quando dizemos que uma classe tem "uma razão para mudar", significa que ela só deve ter uma responsabilidade específica. Se uma classe tem múltiplas responsabilidades, ela poderá ser afetada por vários motivos para mudanças, o que torna o código mais difícil de entender, modificar e testar.


### Cenário do exemplo:

Suponha que temos um sistema para processar pedidos e emitir relatórios de vendas. Se a classe que processa pedidos também for responsável por gerar o relatório de vendas, ela estará violando o SRP, pois ela terá mais de uma responsabilidade. O SRP diz que uma classe deve ter uma única razão para mudar, ou seja, deve ser responsável por uma única funcionalidade.

### Benefícios do Single Responsibility Principle:

- Clareza: Agora, é claro que a classe PedidoService cuida do processamento dos pedidos e a classe RelatorioService cuida do relatório de vendas.
- Manutenção: Se precisarmos alterar como os pedidos são processados (por exemplo, adicionar validações), só precisaremos alterar PedidoService. Se mudarmos a maneira como o relatório é gerado, só precisamos mexer em RelatorioService.
- Testabilidade: Podemos testar as classes de forma independente, sem afetar outras funcionalidades.