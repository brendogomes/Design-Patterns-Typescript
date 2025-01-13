import { Report } from "../class/Report";

export interface IReportBuilder {
    setTitle(title: string): void;
    setContent(content: string): void;
    setFooter(footer: string): void;
    addImage(image: string): void;
    addTable(table: string): void;
    build(): Report;
}