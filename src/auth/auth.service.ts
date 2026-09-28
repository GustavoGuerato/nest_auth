import { Inject, Injectable } from '@nestjs/common';

import { PasswordService } from '../password/password.service';
import { TokenService } from '../token/token.service';

import type { UsersRepository } from '../users/users.repository';

@Injectable()
export class AuthService {
  constructor(
    @Inject('UsersRepository')
    private readonly usersRepository: UsersRepository,

    private readonly passwordService: PasswordService,

    private readonly tokenService: TokenService,
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

  async login(email: string, password: string) {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new Error('Invalid credentials');
    }

    const passwordMatches = await this.passwordService.compare(
      password,
      user.passwordHash,
    );

    if (!passwordMatches) {
      throw new Error('Invalid credentials');
    }

    const token = this.tokenService.sign(user.id);

    return {
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
      },
      token,
    };
  }
}
