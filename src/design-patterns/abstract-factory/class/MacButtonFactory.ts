import { IButton } from "../interface/IButton";
import { IButtonFactory } from "../interface/IButtonFactory";
import { MacButton } from "./MacButton";

export class MacButtonFactory implements IButtonFactory {
    createButton(): IButton {
        return new MacButton();
    }
}