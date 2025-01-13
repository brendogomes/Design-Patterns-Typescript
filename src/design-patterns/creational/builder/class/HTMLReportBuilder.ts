import { IReportBuilder } from "../interface/IReportBuilder";
import { Report } from "./Report";

export class HTMLReportBuilder implements IReportBuilder {
    private report: Report = new Report();

    setTitle(title: string): void {
        this.report.setTitle(title);
    }

    setContent(content: string): void {
        this.report.setContent(content);
    }

    setFooter(footer: string): void {
        this.report.setFooter(footer);
    }

    addImage(image: string): void {
        this.report.addImage(image);
    }

    addTable(table: string): void {
        this.report.addTable(table);
    }

    build(): Report {
        return this.report;
    }
}