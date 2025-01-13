import { NewPaymentAdapter } from "./class/NewPaymentAdapter";
import { NewPaymentSystem } from "./class/NewPaymentSystem";
import { OldPaymentAdapter } from "./class/OldPaymentAdapter";
import { OldPaymentSystem } from "./class/OldPaymentSystem";
import { IPaymentSystem } from "./interface/IPaymentSystem";

function processPayment(paymentSystem: IPaymentSystem, amount: number): void {
    paymentSystem.pay(amount);
}

// Criando as instâncias dos sistemas
const oldPaymentSystem = new OldPaymentSystem();
const newPaymentSystem = new NewPaymentSystem();

// Criando os adapters
const oldPaymentAdapter = new OldPaymentAdapter(oldPaymentSystem);
const newPaymentAdapter = new NewPaymentAdapter(newPaymentSystem);

// Usando os adapters
processPayment(oldPaymentAdapter, 100);  // Usa o sistema de pagamento antigo
processPayment(newPaymentAdapter, 200); // Usa o sistema de pagamento moderno
