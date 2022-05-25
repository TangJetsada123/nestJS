import {  Body,Controller, Delete, Get,  Param, Post, Query} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/books.dto';

@Controller('books')
export class BooksController {
    
    constructor(private readonly bookService: BooksService){}
    
    @Post()
    async create(@Body() createBookDto: CreateBookDto){
        return await this.bookService.create(createBookDto)
    }

    @Get('filter')
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
  }

  
