import { IButton } from "../interface/IButton";

export class MacButton implements IButton {
    render(): void {
        console.log("Renderizando botão no estilo Mac.");
    }
    
    onClick(): void {
        console.log("Botão do Mac clicado!");
    }
}