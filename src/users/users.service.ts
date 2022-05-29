import { ConflictException,Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './users.model';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/users.dto';
import * as  bcrypt from 'bcryptjs'

@Injectable()
export class UsersService {
constructor(@InjectModel(User.name) private readonly usersModel: Model<UserDocument>){}

async register(createUserDto: CreateUserDto): Promise<User>{
    
        try{
            const {email,password} = createUserDto;
            console.log("Your email is:",{email});
            const redun = await this.usersModel.findOne({email});
            console.log("Email  in server:",redun);
            //Check redundant data
            if(redun == null){
                let encryptedPassword = "";
                encryptedPassword = await bcrypt.hash(password,10);
                const userInfo =  this.usersModel.create({
                        email,
                        password: encryptedPassword
                    })
                    return userInfo;
            }else{
                throw new ConflictException({
                    message: ['user is already']
                })
            }
    
        }catch(error){
            return error;
        }
    }

async findAll(){
    const user = await this.usersModel.find().exec();
    return user;
}


async findUser(email: string): Promise<User | undefined>{
    console.log(email)
    const user = await this.usersModel.findOne({email});
    return user;
}


}


