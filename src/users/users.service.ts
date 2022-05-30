import { ConflictException,Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Users, UserDocument } from './users.model';
import { Model } from 'mongoose';
import { AuthDto } from 'src/auth/dto/auth.dto'
import * as bcrypt from "bcryptjs"


@Injectable()
export class UsersService {
constructor(@InjectModel(Users.name) private usersModel: Model<UserDocument>){}

async register(dto: AuthDto): Promise<Users | string>{
    const {username,password} = dto;    
    try {

        const encryptedPassword = bcrypt.hashSync(password, 10);

        const user = new this.usersModel({
            username,
            password: encryptedPassword
        
        })

        const checkUser = await this.findUser(dto.username);
        if (checkUser) {
            // console.log('User have already') ;
            return "User have already";
        } else {
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


}


