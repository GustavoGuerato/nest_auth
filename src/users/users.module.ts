import { Module } from '@nestjs/common';
import { InMemoryUsersRepository } from './in-memory-users.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users.entity';
import { JwtModule } from '@nestjs/jwt';
import { UsersController } from './user.controller';
import { UserService } from './users.services';
import { AuthService } from '../auth/auth.service';
import { JwtStrategy } from '../auth/strategy/jwt-strategy';

@Module({
  imports: [TypeOrmModule.forFeature([User]), JwtModule.register({})],
  controllers: [UsersController],
  providers: [UserService, AuthService, JwtStrategy],
})
export class UsersModule {}
