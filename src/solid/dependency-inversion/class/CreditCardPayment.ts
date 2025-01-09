import { IPaymentMethod } from "../interface/IPaymentMethod";

export class CreditCardPayment implements IPaymentMethod {
    processPayment(amount: number): void {
        console.log(`Processing credit card payment of $${amount}`);
    }
}