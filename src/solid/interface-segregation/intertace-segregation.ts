import { MultiFunctionPrinter } from "./class/MultiFunctionPrinter";
import { ScannerOnly } from "./class/ScannerOnly";
import { SimplePrinter } from "./class/SimplePrinter";

// Usando uma impressora simples (que apenas imprime)
const simplePrinter = new SimplePrinter();
simplePrinter.print('My Simple Document');

// Usando uma impressora multifuncional (que imprime, escaneia e copia)
const multiFunctionPrinter = new MultiFunctionPrinter();
multiFunctionPrinter.print('My Multifunction Document');
multiFunctionPrinter.scan('My Multifunction Document');
multiFunctionPrinter.copy('My Multifunction Document');

// Usando um scanner (que só escaneia)
const scannerOnly = new ScannerOnly();
scannerOnly.scan('My Scanner Document');
