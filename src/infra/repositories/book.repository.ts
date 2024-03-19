import { Book } from "../../domain/entities/book.entity";
import { IBookRepository } from "../../domain/repositories/book.repository.interface";
import { Isbn } from "../../domain/value-objects/isbn.vo";

export class BookRepository implements IBookRepository {
  async findAll(): Promise<Book[]> {
    throw new Error("Method not implemented.");
  }

  async findByIsbn(isbn: Isbn): Promise<Book | undefined> {
    throw new Error(`Method not implemented. ISBN: ${isbn.value}`);
  }

  async remove(isbn: Isbn): Promise<void> {
    throw new Error(`Method not implemented. ISBN: ${isbn.value}`);
  }

  async save(book: Book): Promise<void> {
    throw new Error(`Method not implemented. Book: ${book.title}`);
  }
}