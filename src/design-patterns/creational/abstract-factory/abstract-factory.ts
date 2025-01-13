import { MacButtonFactory } from "./class/MacButtonFactory";
import { WindowsButtonFactory } from "./class/WindowsButtonFactory";
import { IButtonFactory } from "./interface/IButtonFactory";

function createUI(factory: IButtonFactory): void {
    const button = factory.createButton();
    button.render();
    button.onClick();
}

const windowsFactory = new WindowsButtonFactory();
createUI(windowsFactory);

const macFactory = new MacButtonFactory();
createUI(macFactory);