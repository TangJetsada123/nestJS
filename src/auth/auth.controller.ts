import { Controller, Get, Post,Request, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/guards/jwt-Guard.guard";
import { AuthService } from "./auth.service";
import { LocalAuhGuards } from "./local/local-auth.guards";

@Controller('auth')
export class AuthController{
    constructor(private authService: AuthService){}
    
    @UseGuards(LocalAuhGuards)
    @Post('signin')
    async signinLocal(@Request() req:any):Promise<any>{
        console.log(req);
        return this.authService.loginLocal(req.user)
    }

    @UseGuards(JwtAuthGuard)
    @Get('Info')
    getInfo(@Request() req:any): Promise<any>{
        return req.user;
    }

}