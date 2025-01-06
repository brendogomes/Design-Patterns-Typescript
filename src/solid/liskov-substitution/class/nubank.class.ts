import Payment from "../interface/payment.interface";

export default abstract class Nubank implements Payment {
    validate(): void {
        console.log('validate');
    }

    collectPayment(): void {
        console.log('collectPayment');
    }
}