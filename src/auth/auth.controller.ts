import { Body, Controller, Get, Post, Request, UseGuards} from "@nestjs/common";
import { throws } from "assert";
import { Users, UserSchema } from "src/users/users.model";
import { AuthService } from "./auth.service";
import { GetUser } from "./decorator/get-user.decorator";
import { JwtAuthGuard } from "./jwt/jwt-auth.guard";
import { LocalAuthGuard } from "./local/local-auth.guards";


@Controller('auth')
export class AuthController{
    constructor(private authService: AuthService){}
    
    @UseGuards(LocalAuthGuard)
    @Post('login')
    async signinLocal(@Request() req){
        console.log(req.user._doc.username)
        return this.authService.login(req.user)
    }


  

}