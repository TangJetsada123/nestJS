import { Body, Controller, Post,Request} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LocalAuhGuards } from "./local/local-auth.guards";
import { UseGuards } from "@nestjs/common";

@Controller('auth')
export class AuthController{
    constructor(private authService: AuthService){}
    
    @UseGuards(LocalAuhGuards)
    @Post('signin')
    async signinLocal(@Request() req:any):Promise<any>{
        return this.authService.loginLocal(req.User)
    }
    

}