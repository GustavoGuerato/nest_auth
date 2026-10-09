import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';
import { UsersRepository } from './users.repository';
import { RegisterDto } from '../auth/dto/register.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private UsersRepository: Repository<User>,
  ) {}
  create(registerDto: RegisterDto) {
    return this.UsersRepository.save(registerDto);
  }

  findAll() {
    return this.UsersRepository.find();
  }

  async findOneByEmail(username: string) {
    return await this.UsersRepository.findOneBy({ email: username });
  }
}
