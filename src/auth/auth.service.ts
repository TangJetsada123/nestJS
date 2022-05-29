import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt'
import { CreateBookDto } from 'src/books/dto/books.dto';
import { AuthDto } from './dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private userService: UsersService,
        private jwtService: JwtService
      
        ){}

    async validateUser(email:string,password:string): Promise<any>{
        const user = await this.userService.findUser(email)
        const pass = user.password
        console.log(pass)
        if(user && await  bcrypt.compare(password,pass as string)){
            const { password, ... result} = user;
            return result;
        }
    return null;
    }

    async loginLocal(user: any): Promise<any>{
        const  payload = await {email: new  user.email, sub: user.id}

        return{
            accesToken : this.jwtService.sign(payload)
        }

    }


}
