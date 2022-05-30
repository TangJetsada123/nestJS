import { Injectable} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private userService: UsersService,
        private jwtService: JwtService
      
        ){}

    async validateUser(email:string,password:string): Promise<any>{
        const user = await this.userService.findUser(email)
        if(user &&  bcrypt.compareSync(password,user.password as string)){
            const { password, ... result} = user;
            return result;
        }
    return null;
    }


    async loginLocal(user: any){
        const  payload = {username: user.email,sub: user._id };
        console.log(payload);

        return{
             accesToken : this.jwtService.sign(payload,{
                 secret: 'secretKey', 
             })
         }
        
    }


}
