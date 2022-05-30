import { Module} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksModule } from './books/books.module';
import { ImageModule } from './image/image.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ MongooseModule.forRoot(
    'mongodb+srv://TangJetsada:Cm620612144@cluster0.vdhr3.mongodb.net/store'
    ),BooksModule,
    ImageModule,
    AuthModule,
    UsersModule,
    ],
 
 
})
export class AppModule {
}
