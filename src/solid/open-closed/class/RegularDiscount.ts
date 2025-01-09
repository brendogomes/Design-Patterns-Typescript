import { IDiscountStrategy } from "../interfaces/IDiscountStrategy";

export class RegularDiscount implements IDiscountStrategy {
    calculateDiscount(price: number): number {
        return price * 0.05; // 5% de desconto para clientes regulares
    }
}
