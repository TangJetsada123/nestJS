import {Request, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { jwtConstants } from './constants';
import * as bcrypt from 'bcryptjs';
import { Users } from 'src/users/users.model';

@Injectable()
export class AuthService {
    constructor(
        private userService: UsersService,
        private jwtService: JwtService
        ){}

    async validateUser(username: string, password: string): Promise<any>{
       
        const user = await this.userService.findUser(username);
        if (user &&  bcrypt.compareSync(password, user.password)){
            const { password, ... result} = user;
            return result;
        }
    return null;
    }

    async login(user: any){
        const  payload = {username: user._doc.username, sub: user._doc._id };
        return{
             accesToken : this.jwtService.sign(payload,{
                 secret: jwtConstants.secret, 
             })
         }
    }

    async find(user: Users){
        const info = this.userService.findUser(user.username)
        return info;
    }


}
