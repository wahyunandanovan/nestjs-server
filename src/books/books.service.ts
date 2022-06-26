import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';


@Injectable()
export class BooksService {
    private books: any[] = [];

    getAllbooks(): any[] {
    return this.books
    }
    getBook(id: string){
        const bookIdx = this.findBooksById(id)
        return this.books[bookIdx];
    }

    //jangan dihapus

//     filterBook(title:string,author:string,category:string): any[] {
//     const books = this.books.filter((book)=>{
//         let isMatch = true
//         if(title && book.title != title){
//             isMatch = false
//         }
//         if(author && book.author != author){
//             isMatch = false
//         }
//         if(category && book.category != category){
//             isMatch = false
//         }
//         return isMatch
//     });
//     return books
// }


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
    deleteBook(id: string){
        const bookIdx = this.findBooksById(id)
        return this.books.splice(bookIdx,1)
    }


}
