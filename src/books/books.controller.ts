import {  Body,Controller, Delete, Get,  Param, Post, Put, Query, UseGuards} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt/jwt-auth.guard';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/books.dto';

@Controller('books')
export class BooksController {
    
    constructor(private readonly bookService: BooksService){}
    
    @Post()
    async create(@Body() createBookDto: CreateBookDto){
        return await this.bookService.create(createBookDto)
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    async getTask(@Query('name') name: string){
      
      if(name){
        return this.bookService.findByName(name);
       }else{
           const books = await this.bookService.findAll();
           return  books;
       }
    }

    @Get(':_id')
    async  getBookById(@Param('_id') _id: string){     
       const books = await  this.bookService.findById((_id));
       return books;}

    @Delete(':_id')
    async delete(@Param('_id') id:string){
        return this.bookService.delete(id);
    }

    @Put(':_id')
    async update(@Param() id: string,@Body() createBookDto: CreateBookDto ){
        return this.bookService.update(id,createBookDto)
    }
    
  }

  
