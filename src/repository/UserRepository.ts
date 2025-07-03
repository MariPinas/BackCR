import { User } from "../model/User";

export class UserRepository {
  private users: User[] = [
    new User("mariana", "Senha@123", "2025-07-03", "13:00", "ABC123"),
  ];

  findUserByName(name: string): User | undefined {
    return this.users.find((user) => user.name === name);
  }
}
