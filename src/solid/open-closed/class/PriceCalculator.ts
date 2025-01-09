import { IDiscountStrategy } from "../interfaces/IDiscountStrategy";

export class PriceCalculator {
    private discountStrategy: IDiscountStrategy;

    // O construtor recebe a estratégia de desconto
    constructor(discountStrategy: IDiscountStrategy) {
        this.discountStrategy = discountStrategy;
    }

    setDiscountStrategy(discountStrategy: IDiscountStrategy): void {
        this.discountStrategy = discountStrategy;
    }

    calculateFinalPrice(price: number): number {
        const discount = this.discountStrategy.calculateDiscount(price);
        return price - discount;
    }
}
