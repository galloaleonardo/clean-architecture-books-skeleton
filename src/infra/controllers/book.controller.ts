import { Request, Response } from "express";
import { AddAuthorToBookUseCase } from "../../app/usecases/add-author-to-book/add-author-to-book.usecase";

export class BookController {
  constructor(private addAuthorToBookUseCase: AddAuthorToBookUseCase) {}

  async addAuthor(req: Request, res: Response): Promise<void> {
    const { isbnNumber, authorName, authorBio, authorPicture } = req.body;

    try {
      await this.addAuthorToBookUseCase.execute({
        isbnNumber: isbnNumber,
        authorName: authorName,
        authorBio: authorBio,
        authorPicture: authorPicture
      });

      res.status(201).send();
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }
}