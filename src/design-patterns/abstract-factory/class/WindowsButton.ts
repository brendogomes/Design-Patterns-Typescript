import { IButton } from "../interface/IButton";

export class WindowsButton implements IButton {
    render(): void {
        console.log("Renderizando botão no estilo Windows.");
    }

    onClick(): void {
        console.log("Botão do Windows clicado!");
    }
}