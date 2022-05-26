import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserDocument } from 'src/users/users.model';
import { UsersService } from 'src/users/users.service';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService,
        private userService: UsersService,
      
        ){}
    
    // LoginLocal(dto: AuthDto){
       
    //     return ;
    // }
   
    // //generate token 
    // signUser(email: string,type: string){
    //     return this.jwtService.sign({
    //         sub: email,
    //         type: type,
    //     })
    // }

    // async validate(email: string, pass:string): Promise<any>{
    //     const user = await this.userService.findName(email)
    //     if(user && await bcrypt.compare(pass, user.password)){
    //         const {password, ...result } = user
    //         return result;
    //     }
    // }

}
