export class OrderService {
    private orders: string[] = [];

    // Processa um pedido
    public processOrder(order: string): void {
        this.orders.push(order);
        console.log(`Order ${order} processed.`);
    }
}
