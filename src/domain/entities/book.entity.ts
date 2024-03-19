import { Isbn } from "../value-objects/isbn.vo";
import { Author } from "./author.entity";

export class Book {
  id?: number;
  title: string;
  isbn: Isbn;
  picture: string;
  description: string;
  author: Author;

  constructor(title: string, isbn: Isbn, picture: string, description: string, author: Author) {
    this.title = title;
    this.isbn = isbn;
    this.picture = picture;
    this.description = description;
    this.author = author;
  }

  public addAuthor(author: Author): void {
    this.author = author;
  }
}