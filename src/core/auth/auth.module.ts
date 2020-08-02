import { Module } from '@nestjs/common';
import { UserModule } from '../../features/user/user.module';
import { AuthService } from './auth.service';
import { ResponseModule } from '../response/response.module';
import { EncryptModule } from '../encrypt/encrypt.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthConstants } from '../../constants/auth.constants';
import { LocalStrategy } from './stratagies/local.strategy';
import { JwtStrategy } from './stratagies/jwt.strategy';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    UserModule,
    ResponseModule,
    EncryptModule,
    PassportModule,
    JwtModule.register({
      secret: AuthConstants.JWT_SECRET_KEY,
      signOptions: { expiresIn: AuthConstants.TOKEN_TIMEOUT },
    }),
  ],
  exports: [AuthService],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
})
export class AuthModule {}
