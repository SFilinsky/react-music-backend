import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserEntity } from './user.entity';
import { ResponseModule } from '../../core/response/response.module';
import { EncryptModule } from '../../core/encrypt/encrypt.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    ResponseModule,
    EncryptModule,
  ],
  exports: [UserService],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
