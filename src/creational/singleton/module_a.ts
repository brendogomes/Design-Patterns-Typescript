import { MyDatabaseClassic } from './db/my-database-classic';

const myDatabaseClassic = MyDatabaseClassic.getInstance();
myDatabaseClassic.addUser({ name: 'João', age: 32 });
myDatabaseClassic.addUser({ name: 'Maria', age: 25 });
myDatabaseClassic.addUser({ name: 'Carlos', age: 29 });

export { myDatabaseClassic };
