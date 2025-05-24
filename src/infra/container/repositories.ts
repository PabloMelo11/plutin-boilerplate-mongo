import { DependencyContainer } from 'plutin'

import BooksRepositoryMongo from '@infra/database/mongodb/repositories/books-repository-mongo'

DependencyContainer.register('BooksRepository', BooksRepositoryMongo, {
  singleton: true,
})
