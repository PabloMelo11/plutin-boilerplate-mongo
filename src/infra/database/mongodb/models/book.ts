import { model, Schema, SchemaTypes } from 'mongoose'

const bookSchema = new Schema({
  _id: {
    type: SchemaTypes.ObjectId,
    require: true,
  },
  authorId: {
    type: SchemaTypes.ObjectId,
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
  content: {
    type: String,
    require: true,
  },
  bestPage: {
    type: Number,
    require: false,
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
  updatedAt: {
    type: Date,
    default: null,
  },
})

const BookModel = model('Book', bookSchema, 'books')

export default BookModel
