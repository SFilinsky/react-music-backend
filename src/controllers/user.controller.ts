import { Controller, Get, Param, Post, Res } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { UserEntity } from '../entites/user.entity';
import { ResponseService } from '../services/response.service';
import { Response } from 'express';

@Controller('users')
export class UserController {
  constructor(
    private userService: UserService,
    private responseService: ResponseService,
  ) {}

  @Get('')
  getAllUsers(): Promise<UserEntity[]> {
    return this.userService.getAllUsers();
  }

  @Post('check')
  checkExistence(
    @Param('username') username: string,
    @Res() response: Response,
  ): Promise<Response> {
    return Promise.resolve()
      .then(() => this.userService.findOne(username))
      .then(user =>
        this.responseService.build(response, {
          body: {
            exists: Boolean(user),
          },
        }),
      )
      .catch(err => this.responseService.error(response, err));
  }
}
