import { Controller, Get } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { UserEntity } from '../entites/user.entity';

@Controller()
export class UserController {
  constructor(private userService: UserService) {}

  @Get('users')
  getAllUsers(): Promise<UserEntity[]> {
    return this.userService.getAllUsers();
  }
}
