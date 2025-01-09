import { CreditCardPayment } from "./class/CreditCardPayment";
import { PaymentService } from "./class/PaymentService";
import { PayPalPayment } from "./class/PayPalPayment";

// Usando o Cartão de Crédito
const creditCardPayment = new CreditCardPayment();
const paymentService1 = new PaymentService(creditCardPayment);
paymentService1.makePayment(100);

// Usando o PayPal
const payPalPayment = new PayPalPayment();
const paymentService2 = new PaymentService(payPalPayment);
paymentService2.makePayment(50);
