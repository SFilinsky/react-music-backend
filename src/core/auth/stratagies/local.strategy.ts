import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { IVerifyOptions, Strategy } from 'passport-local';
import { AuthService } from '../auth.service';
import { UserEntity } from '../../../features/user/user.entity';
import { Request } from 'express';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super(
      {
        passReqToCallback: true,
      },
      (
        req: Request,
        username: string,
        password: string,
        done: (error: any, user?: any, options?: IVerifyOptions) => void,
      ) => {
        return done(null, {
          username: req.body.username,
          password: req.body.password,
        });
      },
    );
  }

  async validate(
    req: Request,
    username: string,
    password: string,
  ): Promise<UserEntity> {
    const user = await this.authService.validateUser(username, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
