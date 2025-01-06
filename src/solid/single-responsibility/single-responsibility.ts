import Client from "./class/client";
import Notify from "./class/notify";

const client = new Client(1, 'Brendo');
const notify = new Notify(client);

notify.sendEmail()