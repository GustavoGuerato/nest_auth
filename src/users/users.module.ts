import { Module } from '@nestjs/common';
import { InMemoryUsersRepository } from './in-memory-users.repository';

@Module({
  providers: [
    {
      provide: 'UsersRepository',
      useClass: InMemoryUsersRepository,
    },
  ],
  exports: ['UsersRepository'],
})
export class UsersModule {}
