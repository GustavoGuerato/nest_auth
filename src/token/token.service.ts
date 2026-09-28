import { Injectable } from '@nestjs/common';
import jwt from 'jsonwebtoken';

@Injectable()
export class TokenService {
  private readonly secret = 'dev-secret';

  sign(userId: string): string {
    return jwt.sign({ sub: userId }, this.secret, { expiresIn: '1h' });
  }

  verify(token: string): { sub: string } {
    return jwt.verify(token, this.secret) as { sub: string };
  }
}
