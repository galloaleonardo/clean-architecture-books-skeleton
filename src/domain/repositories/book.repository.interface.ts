import { Book } from "../entities/book.entity";
import { Isbn } from "../value-objects/isbn.vo";

export interface IBookRepository {
  save(book: Book): Promise<void>;
  findByIsbn(isbn: Isbn): Promise<Book | undefined>;
  findAll(): Promise<Book[]>;
  remove(isbn: Isbn): Promise<void>;
}