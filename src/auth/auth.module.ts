import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt/jwt.strategy';
import { LocalStartegy } from './local/local.strategy';


@Module({
  imports: [
    UsersModule,
   PassportModule,
    JwtModule.register({
      secret: 'secretKey'
    ,
      signOptions: {expiresIn: '60s'},
    }),
    
  ],

  controllers: [AuthController],
  providers: [AuthService,LocalStartegy,JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
