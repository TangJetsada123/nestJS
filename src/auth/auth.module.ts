import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from 'src/users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStartegy } from './strategy/jwt.strategy';

@Module({
  imports: [
    JwtModule.register({
    secret: 'secret-super',
  }),UsersModule],
  controllers: [AuthController],
  providers: [AuthService,JwtStartegy]
})
export class AuthModule {}
