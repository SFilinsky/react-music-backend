import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './services/user.service';
import { UserController } from './controllers/user.controller';
import { UserEntity } from './entites/user.entity';
import { ResponseModule } from './response.module';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity]), ResponseModule],
  exports: [],
  controllers: [UserController],
  providers: [{ provide: UserService, useClass: UserService }],
})
export class UserModule {}
