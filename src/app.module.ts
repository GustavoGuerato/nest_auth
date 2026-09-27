import { Module } from '@nestjs/common';
import { AuthModule } from './auth/Auth.module';
@Module({
  imports: [AuthModule],
})
export class AppModule {}
