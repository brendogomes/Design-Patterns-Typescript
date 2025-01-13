import { IPaymentSystem } from "../interface/IPaymentSystem";
import { NewPaymentSystem } from "./NewPaymentSystem";

export class NewPaymentAdapter implements IPaymentSystem {
    private newPaymentSystem: NewPaymentSystem;

    constructor(newPaymentSystem: NewPaymentSystem) {
        this.newPaymentSystem = newPaymentSystem;
    }

    pay(amount: number): void {
        // Adaptando o método moderno para a interface comum.
        this.newPaymentSystem.processPayment(amount);
    }
}
