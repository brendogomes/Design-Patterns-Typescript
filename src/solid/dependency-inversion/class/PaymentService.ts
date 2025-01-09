import { IPaymentMethod } from "../interface/IPaymentMethod";


export class PaymentService {
    private paymentMethod: IPaymentMethod;

    // A classe de alto nível recebe uma dependência através do construtor (injeção de dependência)
    constructor(paymentMethod: IPaymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    makePayment(amount: number): void {
        this.paymentMethod.processPayment(amount);
    }
}
