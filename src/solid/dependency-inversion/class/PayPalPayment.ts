import { IPaymentMethod } from "../interface/IPaymentMethod";

export class PayPalPayment implements IPaymentMethod {
    processPayment(amount: number): void {
        console.log(`Processing PayPal payment of $${amount}`);
    }
}