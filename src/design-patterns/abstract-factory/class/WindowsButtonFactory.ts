import { IButton } from "../interface/IButton";
import { IButtonFactory } from "../interface/IButtonFactory";
import { WindowsButton } from "./windowsButton";

export class WindowsButtonFactory implements IButtonFactory {
    createButton(): IButton {
        return new WindowsButton();
    }
}