import { ConflictException, ConsoleLogger, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './users.model';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/users.dto';
import * as  bcrypt from 'bcryptjs'

@Injectable()
export class UsersService {
constructor(@InjectModel(User.name) private readonly usersModel: Model<UserDocument>){}

async register(createUserDto: CreateUserDto): Promise<User>{
    const {email,password} = createUserDto;

    try{
        let encryptedPassword = "";
        encryptedPassword = await bcrypt.hash(password,10);
        const user = await this.usersModel.create({
            email,
            password: encryptedPassword
        })

        return user;
    }catch(err){
        throw new ConflictException({
            message: ['Error message']
        })

    }
 }

async findAll(){
    const user = await this.usersModel.find().exec();
    return user;
}


async findName(email: string): Promise<User | undefined>{
    console.log(email)
    const user = await this.usersModel.findOne({email});
    return user;
}

}
