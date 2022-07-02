import { Body, Controller,Delete,Get, Param, Post, Put, Query } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create.book.dto';
import { UpdateBookDto } from './dto/update.book.dto';

@Controller('books')
export class BooksController {
   constructor (private bookService : BooksService) {}
   //get all books
   @Get()
   getAllbooks(){
   return this.bookService.getAllbooks()
   }
   //get book by category
   @Get('/:id')
   getBook( @Param('id') id:string,){
   return this.bookService.getBook(id);
   }
   //jangan dihapus filter book (tidak bisa digunakan jika parameternya sama)
//    @Get()
//    filterBook(
//     @Query('title') title : string ,
//     @Query('author') author : string,
//     @Query('category') category : string
//     ){
//     return this.bookService.filterBook(title,author,category)
//    }
   
   @Post()
   createBooks(
    @Body() payload : CreateBookDto )
    {
    return this.bookService.createBooks(payload)
    }

   @Put('/:id')
   updateBooks(
    @Param('id') id:string,
    @Body() payload : UpdateBookDto)
    {
    return this.bookService.updateBooks(id,payload)
    }

    @Delete('/:id')
    deleteBook(@Param('id') id : string){
    return this.bookService.deleteBook(id)
    }

}

