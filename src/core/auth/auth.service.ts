import { Injectable } from '@nestjs/common';
import { UserService } from '../../features/user/user.service';
import { EncryptService } from '../encrypt/encrypt.service';
import { UserEntity } from '../../features/user/user.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private encryptService: EncryptService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<UserEntity> {
    const user = await this.userService.findOne(username);
    if (user && user.password === this.encryptService.encryptPassword(pass)) {
      return { ...user, password: null };
    }
    return null;
  }

  login(user: UserEntity): { accessToken: string } {
    const payload = { username: user.username, sub: user.id };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
