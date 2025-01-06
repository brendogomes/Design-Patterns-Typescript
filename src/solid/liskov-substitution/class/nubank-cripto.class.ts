import Payment from "../interface/payment.interface";

export default class NubankCripto implements Payment {

    validate(): void {
        console.log('Is there cryptocurrency?');
    }

    collectPayment(): void {
        console.log('Pay with cryptocurrency');
    }
}