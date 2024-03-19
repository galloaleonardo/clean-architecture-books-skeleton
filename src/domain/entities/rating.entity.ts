import { Book } from "./book.entity";
import { User } from "./user.entity";

export class Rating {
  id?: number;
  user: User;
  date: Date;
  book: Book;
  text: string;
  rating: number;

  constructor(user: User, date: Date, book: Book, text: string, rating: number) {
    this.user = user;
    this.date = date;
    this.book = book;
    this.text = text;
    this.rating = rating;
  }

  changeRating(rating: number): void {
    this.rating = rating;
  }
}