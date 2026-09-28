import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { PasswordModule } from '../password/password.module';
import { TokenModule } from '../token/token.module';

@Module({
  imports: [UsersModule, PasswordModule, TokenModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
