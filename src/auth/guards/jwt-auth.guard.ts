import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JwtPayload } from 'jsonwebtoken';
import { RegisterDto } from '../dto/register.dto';
import { updateUserDTO } from '../dto/update.dto';
import { User } from '../../users/users.entity';
