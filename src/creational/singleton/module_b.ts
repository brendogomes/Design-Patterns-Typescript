import { MyDatabaseClassic } from './db/my-database-classic';
import { myDatabaseClassic as myDatabaseClassicFromModuleA } from './module_a';

const myDatabaseClassic = MyDatabaseClassic.getInstance();
myDatabaseClassic.addUser({ name: 'Roberta', age: 22 });
myDatabaseClassic.addUser({ name: 'Gustavo', age: 34 });
myDatabaseClassic.addUser({ name: 'Jessyca', age: 29 });
myDatabaseClassic.showUsers();

console.log(myDatabaseClassic === myDatabaseClassicFromModuleA);
