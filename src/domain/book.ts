import { EntityObject, Optional, Replace, UniqueObjectUniqueId } from 'plutin'

type BookProps = {
  title: string
  content: string
  authorId: UniqueObjectUniqueId
  bestPage: number | null
}

type CreateBookProps = Optional<
  Replace<BookProps, { authorId: string }>,
  'bestPage'
>

export default class Book extends EntityObject<BookProps> {
  get title() {
    return this.props.title
  }

  get content() {
    return this.props.content
  }

  get authorId() {
    return this.props.authorId
  }

  get bestPage() {
    return this.props.bestPage
  }

  static create(props: CreateBookProps, id?: string) {
    const book = new Book(
      {
        authorId: new UniqueObjectUniqueId(props.authorId),
        content: props.content,
        title: props.title,
        bestPage: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      new UniqueObjectUniqueId(id)
    )

    return book
  }
}
