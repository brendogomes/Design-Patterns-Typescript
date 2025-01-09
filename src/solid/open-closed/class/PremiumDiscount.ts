import { IDiscountStrategy } from "../interfaces/IDiscountStrategy";

export class PremiumDiscount implements IDiscountStrategy {
    calculateDiscount(price: number): number {
        return price * 0.3; // 30% de desconto para clientes Premium
    }
}
