import { IPaymentSystem } from "../interface/IPaymentSystem";
import { OldPaymentSystem } from "./OldPaymentSystem";

export class OldPaymentAdapter implements IPaymentSystem {
    private oldPaymentSystem: OldPaymentSystem;

    constructor(oldPaymentSystem: OldPaymentSystem) {
        this.oldPaymentSystem = oldPaymentSystem;
    }

    pay(amount: number): void {
        // Adaptando o método antigo para a interface comum.
        this.oldPaymentSystem.makePayment(amount);
    }
}
