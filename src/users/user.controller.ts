import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { UserService } from './users.services';
import { RegisterDto } from '../auth/dto/register.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() registerDto: RegisterDto) {
    return await this.userService.create(registerDto);
  }
  @Get()
  @UseGuards(AuthGuard('jwt'))
  listarUsuarios() {
    return this.userService.findAll();
  }
}
