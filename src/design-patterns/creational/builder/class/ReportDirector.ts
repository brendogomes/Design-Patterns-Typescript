import { IReportBuilder } from "../interface/IReportBuilder";

export class ReportDirector {
    private builder: IReportBuilder;

    constructor(builder: IReportBuilder) {
        this.builder = builder;
    }

    constructReport(): void {
        this.builder.setTitle("Relatório Mensal");
        this.builder.setContent("Este é o conteúdo do relatório...");
        this.builder.setFooter("Rodapé do relatório.");
        this.builder.addImage("imagem1.jpg");
        this.builder.addTable("tabela1.csv");
    }
}