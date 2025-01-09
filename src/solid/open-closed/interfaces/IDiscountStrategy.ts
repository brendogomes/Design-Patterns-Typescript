export interface IDiscountStrategy {
    calculateDiscount(price: number): number;
}
