export class ReportService {
    private orders: string[];

    constructor(orders: string[]) {
        this.orders = orders;
    }

    // Gera o relatório de vendas
    public generateSalesReport(): void {
        console.log('Sales Report:');
        this.orders.forEach(order => console.log(order));
    }
}
