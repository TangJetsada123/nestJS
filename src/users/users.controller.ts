import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { UsersService } from "./users.service"; 
import { Users } from "./users.model";
import { UserDto } from "./dto/users.dto";
@Controller('users')
export class UsersController {
    
    constructor(private userService: UsersService){}
    
    
    @Post('/register')
    async create(@Body() dto: UserDto){
        return  await this.userService.register(dto);
    }

   @Get(':findname')
    async find(@Body('username') username: string):Promise<Users>{
        return await this.userService.findUser(username)
    }    
    
  }

  
