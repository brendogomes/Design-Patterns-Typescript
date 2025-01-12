import { HTMLReportBuilder } from "./class/HTMLReportBuilder";
import { PDFReportBuilder } from "./class/PDFReportBuilder";
import { ReportDirector } from "./class/ReportDirector";

// Criando um construtor para um relatório HTML
const htmlBuilder = new HTMLReportBuilder();
const directorHTML = new ReportDirector(htmlBuilder);
directorHTML.constructReport();
const htmlReport = htmlBuilder.build();
htmlReport.show();

// Criando um construtor para um relatório PDF
const pdfBuilder = new PDFReportBuilder();
const directorPDF = new ReportDirector(pdfBuilder);
directorPDF.constructReport();
const pdfReport = pdfBuilder.build();
pdfReport.show();