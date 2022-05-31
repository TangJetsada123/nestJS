import { ConflictException,ConsoleLogger,Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Users, UserDocument } from './users.model';
import { Model } from 'mongoose';
import { UserDto } from './dto/users.dto';
import * as bcrypt from "bcryptjs"


@Injectable()
export class UsersService {
constructor(@InjectModel(Users.name) private usersModel: Model<UserDocument>){}

async register(dto: UserDto): Promise<Users | string>{
    const {username,password,email} = dto;   
    
    try {
        const encryptedPassword = bcrypt.hashSync(password, 10);
        const user = new this.usersModel({
            username,
            email,
            password: encryptedPassword
        
        })

        const checkUser = await this.findUser(dto.username);
        const checkEmail = await this.findEmail(dto.email);
        console.log("User:  "+checkUser);
        console.log("Email: "+checkEmail);
        
        if(checkEmail&&checkUser){
            return "User have already";
        }else{
            return user.save();
        }
      
    } catch (err) {
        throw new ConflictException({
            message: ['Error']
        })
    }
    }

async findUser(username: string): Promise<Users | undefined>{
           return await this.usersModel.findOne({username: username}).exec();
}

async findEmail(email: string): Promise<Users | undefined>{
    return await this.usersModel.findOne({email: email}).exec();
}

}


