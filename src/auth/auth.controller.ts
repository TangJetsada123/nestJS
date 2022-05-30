import { Body, Controller, Get, Post, Request, UseGuards} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LocalAuthGuard } from "./local/local-auth.guards";

@Controller('auth')
export class AuthController{
    constructor(private authService: AuthService){}
    
    @UseGuards(LocalAuthGuard)
    @Post('login')
    async signinLocal(@Request() req){
        console.log(req.user)
        return this.authService.login(req.user)
    }

  
   

}