import { UserRepository } from "../repository/UserRepository";

export class AuthService {
  private repo = new UserRepository();

  validateUser(name: string) {
    return this.repo.findUserByName(name);
  }
}
