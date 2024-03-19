import { Book } from "./book.entity";

export class Author {
  id?: number;
  name: string;
  picture: string;
  biography: string;
  books: Book[];

  constructor(name: string, picture: string, biography: string, books: Book[]) {
    this.name = name;
    this.picture = picture;
    this.biography = biography;
    this.books = books;
  }

  public addBook(book: Book): void {
    this.books.push(book);
  }

  public removeBook(book: Book): void {
    this.books = this.books.filter(b => b.id !== book.id);
  }
}