import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './services/user.service';
import { UserController } from './controllers/user.controller';
import { UserEntity } from './entites/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  exports: [],
  controllers: [UserController],
  providers: [{ provide: UserService, useClass: UserService }],
})
export class UserModule {}
