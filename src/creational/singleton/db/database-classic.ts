import { User } from '../interfaces/user';
/*
  Classic pois é voltado para qualquer outra linguagem de programação que
  seja voltada para POO.

  Essa abordagem irá funcionar em Typescript e não no Javascript.
*/
export class DatabaseClassic {
  private static instance: DatabaseClassic | null = null;
  private users: User[] = [];

  private constructor() {}

  static getInstance(): DatabaseClassic {
    if (!DatabaseClassic.instance) {
      DatabaseClassic.instance = new DatabaseClassic();
    }

    return DatabaseClassic.instance;
  }

  addUser(user: User): void {
    this.users.push(user);
  }

  removeUser(index: number): void {
    this.users.splice(index, 1);
  }

  showUsers(): void {
    for (const user of this.users) {
      console.log(user);
    }
  }
}
