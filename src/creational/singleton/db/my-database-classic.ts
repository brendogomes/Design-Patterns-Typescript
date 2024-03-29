import { User } from '../interfaces/user';

export class MyDatabaseClassic {
  private static instance: MyDatabaseClassic | null = null;
  private users: User[] = [];

  private constructor() {}

  static getInstance(): MyDatabaseClassic {
    if (!MyDatabaseClassic.instance) {
      MyDatabaseClassic.instance = new MyDatabaseClassic();
    }

    return MyDatabaseClassic.instance;
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
