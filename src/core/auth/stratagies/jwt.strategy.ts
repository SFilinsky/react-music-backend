import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthConstants } from '../../../constants/auth.constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: AuthConstants.JWT_SECRET_KEY,
    });
  }

  validate(payload: {
    username: string;
    sub: string;
  }): { id: string; username: string } {
    return { id: payload.sub, username: payload.username };
  }
}
