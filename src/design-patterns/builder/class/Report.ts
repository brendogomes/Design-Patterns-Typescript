export class Report {
    private title: string = '';
    private content: string = '';
    private footer: string = '';
    private images: string[] = [];
    private tables: string[] = [];

    setTitle(title: string): void {
        this.title = title;
    }

    setContent(content: string): void {
        this.content = content;
    }

    setFooter(footer: string): void {
        this.footer = footer;
    }

    addImage(image: string): void {
        this.images.push(image);
    }

    addTable(table: string): void {
        this.tables.push(table);
    }

    show(): void {
        console.log("Relatório:");
        console.log(`Título: ${this.title}`);
        console.log(`Conteúdo: ${this.content}`);
        console.log(`Imagens: ${this.images.join(", ")}`);
        console.log(`Tabelas: ${this.tables.join(", ")}`);
        console.log(`Rodapé: ${this.footer}`);
    }
}