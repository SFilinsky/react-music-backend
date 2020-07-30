import { Injectable } from '@nestjs/common';
import { FindOperator, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../entites/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity) private userRepo: Repository<UserEntity>,
  ) {}

  getAllUsers(): Promise<UserEntity[]> {
    return this.userRepo.query('SELECT * FROM user;');
  }

  findOne(username: string): Promise<UserEntity> {
    return this.userRepo.findOne({ where: { username } });
  }
}
