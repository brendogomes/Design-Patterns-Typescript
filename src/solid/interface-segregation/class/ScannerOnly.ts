import { IScanner } from "../interface/IScanner";

export class ScannerOnly implements IScanner {
    scan(document: string): string {
        console.log(`Scanning document: ${document}`);
        return `Scanned document: ${document}`;
    }
}