import { Inject, Injectable } from '@nestjs/common';

import { PasswordService } from '../password/password.service';

import type { UsersRepository } from '../users/users.repository';

@Injectable()
export class AuthService {
  constructor(
    @Inject('UsersRepository')
    private readonly usersRepository: UsersRepository,

    private readonly passwordService: PasswordService,
  ) {}

  async register(username: string, email: string, password: string) {
    const existingUser = await this.usersRepository.findByEmail(email);

    if (existingUser) {
      throw new Error('User already exists');
    }

    const passwordHash = await this.passwordService.hash(password);

    return this.usersRepository.create({
      username,
      email,
      passwordHash,
    });
  }
}
