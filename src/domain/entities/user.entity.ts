import { Book } from "./book.entity";

export class User {
  name: string;
  document: Document;
  books: Book[];

  constructor(name: string, document: Document, books: Book[] = []) {
    this.name = name;
    this.document = document;
    this.books = books;
  }

  public buyBook(book: Book): void {
    this.books.push(book);
  }
}