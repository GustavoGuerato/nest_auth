import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JwtPayload } from 'jsonwebtoken';
import { RegisterDto } from '../dto/register.dto';
import { updateUserDTO } from '../dto/update.dto';
import { User } from '../../users/users.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, "jwt"){
  constructor(private userser)
}