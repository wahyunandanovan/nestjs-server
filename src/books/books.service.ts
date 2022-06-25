import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';


@Injectable()
export class BooksService {
    private books: any[] = [];

    getAllbooks(): any[] {
    return this.books
    }

    createBooks(title:string,author:string,category:string){
        this.books.push({
            id:uuidv4(),
            title,
            author,
            category
        })
    }

    updateBooks(id:string,title:string,author:string,category:string){
    const bookIdx = this.findBooksById(id)
    this.books[bookIdx].title = title
    this.books[bookIdx].author = author
    this.books[bookIdx].category = category
    }
    findBooksById(id:string){
        const bookIdx = this.books.findIndex((book)=> book.id === id)
            if(bookIdx === -1){
                throw new NotFoundException(` Books ${id} not found`)
            }
            return bookIdx
        
    }
}
