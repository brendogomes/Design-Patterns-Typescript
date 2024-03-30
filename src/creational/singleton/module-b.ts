import { DatabaseClassic } from './db/database-classic';
import { myDatabaseClassic as myDatabaseClassicFromModuleA } from './module-a';

const myDatabaseClassic = DatabaseClassic.getInstance();
myDatabaseClassic.addUser({ name: 'Roberta', age: 22 });
myDatabaseClassic.addUser({ name: 'Gustavo', age: 34 });
myDatabaseClassic.addUser({ name: 'Jessyca', age: 29 });
myDatabaseClassic.showUsers();

console.log(myDatabaseClassic === myDatabaseClassicFromModuleA);
