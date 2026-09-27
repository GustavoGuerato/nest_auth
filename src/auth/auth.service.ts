import { Inject, Injectable } from '@nestjs/common';
import type { UsersRepository } from '../users/users.repository';

@Injectable()
export class AuthService {
  constructor(
    @Inject('UsersRepository')
    private readonly usersRepository: UsersRepository,
  ) {}

  async register(username: string, email: string, passwordHash: string) {
    const existingUser = await this.usersRepository.findByEmail(email);

    if (existingUser) {
      throw new Error('User already exists');
    }

    return this.usersRepository.create({ username, email, passwordHash });
  }
}
