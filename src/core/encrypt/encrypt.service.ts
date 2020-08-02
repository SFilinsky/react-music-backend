import { Injectable } from '@nestjs/common';

@Injectable()
export class EncryptService {
  encryptPassword(password: string): string {
    return password;
  }
}
