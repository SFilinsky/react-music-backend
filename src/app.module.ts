import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './features/user/user.module';
import { UserEntity } from './features/user/user.entity';
import { AuthModule } from './core/auth/auth.module';
import { SearchModule } from './features/search/search.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'reactmusic',
      password: 'reactmusic',
      database: 'reactmusicdb',
      entities: [UserEntity],
      synchronize: true,
    }),
    UserModule,
    SearchModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
