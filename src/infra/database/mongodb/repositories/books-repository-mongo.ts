import type IBooksRepository from '@application/repositories/books-repository'
import type Book from '@domain/book'

import BookModel from '../models/book'

export default class BooksRepository implements IBooksRepository {
  async create(book: Book): Promise<void> {
    await BookModel.create({
      _id: book.id.toString(),
      authorId: book.authorId.toString(),
      title: book.title,
      content: book.content,
      bestPage: book.bestPage,
      createdAt: book.createdAt,
      updatedAt: book.updatedAt,
    })
  }
}
