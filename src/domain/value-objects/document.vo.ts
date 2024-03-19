export class Document {
  value: string;

  constructor(value: string) {
    this.value = value;
  }

  public ensureIsValid(value: string): void {
    if (!/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(value)) {
      throw new Error(`Invalid document: ${value}`);
    }
  }
}