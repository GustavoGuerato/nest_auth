import { UsersRepository, User, CreateUserData } from './users.repository';
import { randomUUID } from 'crypto';
export class InMemoryUsersRepository implements UsersRepository {
  private readonly users = new Map<string, User>();

  create(data: CreateUserData): Promise<User> {
    const user: User = {
      id: randomUUID(),
      username: data.username,
      email: data.email,
      passwordHash: data.passwordHash,
    };
    this.users.set(user.id, user);

    return Promise.resolve(user);
  }
  async findByEmail(email: string): Promise<User | null> {
    for (const user of this.users.values()) {
      if (user.email === email) {
        return user;
      }
    }

    return null;
  }
}
