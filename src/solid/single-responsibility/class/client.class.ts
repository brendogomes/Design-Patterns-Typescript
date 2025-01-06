// Classe que gerencia os dados do cliente
/**
 * A responsabilidade desta classe é gerenciar as informações do cliente (operações CRUD).
 * O envio de e-mails ao cliente é uma responsabilidade separada e não deve ser implementada aqui.
 * Manter essas responsabilidades distintas segue o Princípio da Responsabilidade Única (SRP),
 * garantindo que a classe `Client` se concentre exclusivamente no gerenciamento de dados do cliente
 * sem se sobrecarregar com outras funções.
 */
export default class Client {

    public id: number;
    public name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    create(): void {
        console.log('Client created');
    }

    read(): void {
        console.log('Client details');
    }

    update(): void {
        console.log('Client updated');
    }

    delete(): void {
        console.log('Client deleted');
    }
}