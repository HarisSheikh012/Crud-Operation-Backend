import { Controller, Get, Post, Put, Delete, Param } from "@nestjs/common"
import { BookService } from "./book.service"

@Controller("book")
export class BookController {
    constructor(private bookService: BookService) { }
    @Get("/find")
    findAllBook(): string {
        return this.bookService.findAllBook();
    }
    @Get("/findOneBookById/:bookId")
    findOneBook(@Param() params): string {
        return this.bookService.findOneBook(params.bookId)
    }
    @Post("/add")
    addBook(): string {
        return this.bookService.addBook()
    }
    @Put("/update")
    updateBook(): string {
        return this.bookService.updateBook()
    }
    @Delete("/delete")
    deleteBook(): string {
        return this.bookService.deleteBook()
    }
}