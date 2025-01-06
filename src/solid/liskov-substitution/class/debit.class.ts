import Nubank from "./nubank.class";

export default class Debit extends Nubank {

    validate(): void {
        console.log('Is there a balance in the account?')
    }
}