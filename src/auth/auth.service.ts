import { Inject, Injectable } from '@nestjs/common';
import type { UsersRepository } from '../users/users.repository';

@Injectable()
export class AuthService {
  constructor(
    @Inject('UsersRepository')
    private readonly usersRepository: UsersRepository,
  ) {}
}
