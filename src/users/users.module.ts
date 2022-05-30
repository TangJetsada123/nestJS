import { Module } from '@nestjs/common';
import { Users } from './users.model';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './users.model';
import { UsersController } from './users.controller';

@Module({
  imports: [MongooseModule.forFeature([{name: Users.name, schema: UserSchema}]),],
  controllers: [UsersController],
  providers: [UsersService],
  exports:[UsersService]
})
export class UsersModule {}
