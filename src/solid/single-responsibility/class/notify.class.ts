import Client from "./client.class";

/**
 * Classe responsável por enviar notificações.
 * Atualmente, ela lida apenas com o envio de e-mails, mas pode ser estendida no futuro
 * para suportar outros tipos de notificações (SMS, push, etc...).
 */
export default class Notify {

    constructor(private client: Client) {}

    sendEmail(): void {
        console.log(`Enviando e-mail para: ${this.client.name}`);
    }
}
