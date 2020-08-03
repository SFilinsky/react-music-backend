import { Module } from '@nestjs/common';
import { EncryptService } from './encrypt.service';

@Module({
  exports: [EncryptService],
  providers: [EncryptService],
})
export class EncryptModule {}
