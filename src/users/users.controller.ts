import {  Body,Controller, Delete, Get,  Param, Post, Query, UseGuards} from '@nestjs/common';
import { UsersService } from './users.service';
import  {CreateUserDto} from './dto/users.dto';

@Controller('users')
export class UsersController {
    
    constructor(private readonly userService: UsersService){}
    
    
    @Post('/add')
    async create(@Body() createUserDto: CreateUserDto){
        return await this.userService.register(createUserDto);
    }
    
    @Get()
    async getUser(){
        return this.userService.findAll();
    }

  }

  
