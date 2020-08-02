import {
  Body,
  Controller,
  Injectable,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { UserService } from '../../features/user/user.service';
import { ResponseService } from '../response/response.service';
import { UserEntity } from '../../features/user/user.entity';

@Controller('auth')
export class AuthController {
  constructor(
    private userService: UserService,
    private authService: AuthService,
    private responseService: ResponseService,
  ) {}

  @Post('register')
  async register(
    @Body() data: { login: string; password: string; email: string },
    @Res() response: Response,
  ): Promise<Response> {
    const { login, password, email } = data;
    return Promise.resolve()
      .then(() => {
        return this.userService.create({
          id: null,
          username: login,
          password,
          email,
        });
      })
      .then(() => {
        return this.responseService.build(response);
      })
      .catch(err => this.responseService.error(response, err));
  }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  login(@Req() req: Request & { user: UserEntity }): { accessToken: string } {
    return this.authService.login(req.user);
  }
}
