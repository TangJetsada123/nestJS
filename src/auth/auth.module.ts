import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { BooksModule } from 'src/books/books.module';
import { UsersModule } from 'src/users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt/jwt.strategy';
import { LocalStrategy } from './local/local.strategy';


@Module({
  imports: [
    UsersModule,
    PassportModule,
    BooksModule,
    JwtModule.register({
      secret: jwtConstants.secret
    ,
      signOptions: {expiresIn: '60s'},
    }),
    
  ],

  controllers: [AuthController],
  providers: [AuthService,LocalStrategy,JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
