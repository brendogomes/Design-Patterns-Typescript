import Nubank from "./nubank.class";

export default class Credit extends Nubank {

    validate(): void {
        console.log('Is there a credit limit?')
    }
}