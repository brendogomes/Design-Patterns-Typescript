import { ICopier } from "../interface/ICopier";
import { IPrinter } from "../interface/IPrinter";
import { IScanner } from "../interface/IScanner";

export class MultiFunctionPrinter implements IPrinter, IScanner, ICopier {
    print(document: string): void {
        console.log(`Printing document: ${document}`);
    }

    scan(document: string): string {
        console.log(`Scanning document: ${document}`);
        return `Scanned document: ${document}`;
    }

    copy(document: string): string {
        console.log(`Copying document: ${document}`);
        return `Copied document: ${document}`;
    }
}