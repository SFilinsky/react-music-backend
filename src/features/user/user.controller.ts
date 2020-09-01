import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserEntity } from './user.entity';
import { ResponseService } from '../../core/response/response.service';
import { Response } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../../core/auth/auth.service';

@Controller('users')
export class UserController {
  constructor(
    private userService: UserService,
    private responseService: ResponseService,
  ) {}

  @Get('')
  async getAllUsers(): Promise<UserEntity[]> {
    return this.userService.getAllUsers();
  }

  @Post('check')
  async checkExistence(
    @Body('username') username: string,
    @Res() response: Response,
  ): Promise<Response> {
    return Promise.resolve()
      .then(() => {
        return this.userService.findOne(username);
      })
      .then(user => {
        return this.responseService.build(response, {
          body: {
            exists: Boolean(user),
          },
        });
      })
      .catch(err => this.responseService.error(response, err));
  }

  @Post('check-email')
  async checkEmail(
    @Body('email') email: string,
    @Res() response: Response,
  ): Promise<Response> {
    return Promise.resolve()
      .then(() => {
        return this.userService.findOneByEmail(email);
      })
      .then(user => {
        return this.responseService.build(response, {
          body: {
            exists: Boolean(user),
          },
        });
      })
      .catch(err => this.responseService.error(response, err));
  }
}
