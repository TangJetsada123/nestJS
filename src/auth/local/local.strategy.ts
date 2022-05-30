import { Injectable, UnauthorizedException } from "@nestjs/common";
import { Strategy } from "passport-local";
import { PassportStrategy } from "@nestjs/passport";
import { AuthService } from "../auth.service";

@Injectable()
export class LocalStartegy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super();
      }
    
      async validate(email: string, password: string): Promise<any> {

        const user = await this.authService.validateUser(email, password);
        if(!user){
          throw new UnauthorizedException({
            message: ['Error Something went wrong']
          });
        }

        return user;
      }
}