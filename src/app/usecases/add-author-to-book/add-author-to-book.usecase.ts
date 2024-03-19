import { Author } from '../../../domain/entities/author.entity';
import { Isbn } from '../../../domain/value-objects/isbn.vo';
import { IAddAuthorToBookOutput } from './add-author-to-book.output.interface';
import { IAddAuthorToBookInput } from './add-author-to-book.input.interface';
import { IBookRepository } from '../../../domain/repositories/book.repository.interface';

export class AddAuthorToBookUseCase {
    constructor(private bookRepository: IBookRepository) {}

    async execute(input: IAddAuthorToBookInput): Promise<IAddAuthorToBookOutput> {
      const { isbnNumber, authorName, authorBio, authorPicture } = input;

      const isbn = new Isbn(isbnNumber);

      const book = await this.bookRepository.findByIsbn(isbn);

      if (!book) {
        throw new Error(`Book not found. ISBN: ${isbn.value}`);
      }

      const author = new Author(authorName, authorPicture, authorBio, [book]);

      book.addAuthor(author);

      this.bookRepository.save(book);

      return { id: author.id as number };
    }
}