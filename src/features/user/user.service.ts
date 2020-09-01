import { Injectable } from '@nestjs/common';
import { InsertResult, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { EncryptService } from '../../core/encrypt/encrypt.service';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity) private userRepo: Repository<UserEntity>,
    private encryptService: EncryptService,
  ) {}

  async getAllUsers(): Promise<UserEntity[]> {
    return this.userRepo.query('SELECT * FROM user;');
  }

  async findOne(username: string): Promise<UserEntity | undefined> {
    return this.userRepo
      .query(`SELECT * FROM user_entity WHERE username = "${username}"`)
      .then(data => data[0]);
  }

  async findOneByEmail(email: string): Promise<UserEntity | undefined> {
    return this.userRepo
      .query(`SELECT * FROM user_entity WHERE email = "${email}"`)
      .then(data => data[0]);
  }

  async create(user: UserEntity): Promise<InsertResult> {
    const encrypted = { ...user };
    encrypted.password = this.encryptService.encryptPassword(
      encrypted.password,
    );
    return this.userRepo.insert(user);
  }
}
