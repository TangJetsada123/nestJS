import { Module } from '@nestjs/common';
import { User } from './users.model';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './users.model';
import { UsersController } from './users.controller';

@Module({
  imports: [MongooseModule.forFeature([{name: User.name, schema: UserSchema}]),],
  controllers: [UsersController],
  providers: [UsersService],
  exports:[UsersService]
})
export class UsersModule {}
