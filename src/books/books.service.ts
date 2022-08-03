import { Injectable} from '@nestjs/common';
import { InjectModel} from '@nestjs/mongoose'
import { Model } from 'mongoose';
import {Book, BookDocument}  from './books.model'
import { CreateBookDto } from './dto/books.dto';
import { checkBooks} from '../middleware/file.middleware';


@Injectable()
export class BooksService {
   book: any;
   constructor(@InjectModel(Book.name) private  readonly BooksModel: Model<BookDocument>) {}

   
   async create(createBookDto: CreateBookDto): Promise<Book>{
      const book = await this.BooksModel.create(createBookDto);
      return book;
   }
   async findAll(){
        const books = await this.BooksModel.find().exec();
        return books;
     }  
     
   async findById(_id: string){
        const books = await  this.BooksModel.findById(_id).exec();
        return books;
     } 

   async findByName(name: string){
         const books = await this.BooksModel.find({name: {$regex: name,$options: 'i'}})
         console.log("Books:",books.length);
         checkBooks(books);
         return books;
      
   }  
   async  update(_id: string, createBookDto: CreateBookDto){
      const post = await this.BooksModel.findByIdAndUpdate(_id,createBookDto)
      return post;
   }

   async delete(id:string){
      const book = await this.BooksModel.findByIdAndRemove({_id: id }).exec();
      return book;
   }

}


  




