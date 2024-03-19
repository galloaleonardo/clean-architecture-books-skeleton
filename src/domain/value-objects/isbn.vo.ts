export class Isbn {
  value: string;

  constructor(value: string) {
    this.value = value;
  }

  public ensureIsValid(value: string): void {
    if (!/^\d{3}-\d{10}$/.test(value)) {
      throw new Error(`Invalid ISBN: ${value}`);
    }
  }

  public getFormattedIsbn(): string {
    return this.value.replace(/(\d{3})(\d{10})/, "$1-$2");
  }
}