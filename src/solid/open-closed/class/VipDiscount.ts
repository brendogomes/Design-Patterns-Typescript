import { IDiscountStrategy } from "../interfaces/IDiscountStrategy";

export class VipDiscount implements IDiscountStrategy {
    calculateDiscount(price: number): number {
        return price * 0.2; // 20% de desconto para clientes VIP
    }
}
