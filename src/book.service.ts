import { Injectable } from "@nestjs/common";

@Injectable()

export class BookService {
    findAllBook(): string {
        return "This will find All book";
    }
    findOneBook(bookId): string {
        return `This will find one Book by Id ${bookId}`;
    }
    addBook(): string {
        return "This will add book";
    }
    updateBook(): string {
        return "This will update book";
    }
    deleteBook(): string {
        return "This will delete book";
    }
}