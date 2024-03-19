import { Book } from "./book.entity";

export class Stock {
  id: number;
  book: Book;
  amount: number;

  constructor(id: number, book: Book, amount: number) {
    this.id = id;
    this.amount = amount;
  }

  public addAmount(amount: number): void {
    this.amount += amount;
  }

  public removeAmount(amount: number): void {
    this.amount -= amount;
  }
}