import Client from "./class/client.class";
import Notify from "./class/notify.class";

const client = new Client(1, 'Brendo');
const notify = new Notify(client);

notify.sendEmail()