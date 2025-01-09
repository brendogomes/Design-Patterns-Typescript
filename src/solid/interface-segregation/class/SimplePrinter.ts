import { IPrinter } from "../interface/IPrinter";

export class SimplePrinter implements IPrinter {
    print(document: string): void {
        console.log(`Printing document: ${document}`);
    }
}