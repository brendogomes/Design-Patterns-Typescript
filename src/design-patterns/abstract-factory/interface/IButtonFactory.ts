import { IButton } from "./IButton";

export interface IButtonFactory {
    createButton(): IButton;
}