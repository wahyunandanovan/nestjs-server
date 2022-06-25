import { Body, Controller,Get, Param, Post, Put } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
   constructor (private bookService : BooksService) {}
   @Get()
   getAllbooks(){
    return this.bookService.getAllbooks()
   }
   
   @Post()
   createBooks(
    @Body('title') title:string,
    @Body('author') author:string,
    @Body('category') category:string
    ){
    return this.bookService.createBooks(title,author,category)
    }

   @Put('/:id')
   updateBooks(
    @Param('id') id:string,
    @Body('title') title:string,
    @Body('author') author:string,
    @Body('category') category:string 
    ){
    return this.bookService.updateBooks(id,title,author,category)
    }

}

