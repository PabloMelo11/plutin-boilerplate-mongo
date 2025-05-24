import { randomUUID } from 'node:crypto'
import type { Environment } from 'vitest/environments'

import { connectionDB } from '../src/infra/database/mongodb/connection'

export default <Environment>{
  name: 'mongo',
  transformMode: 'ssr',

  async setup() {
    if (!process.env.DATABASE_URL) {
      throw new Error('Database URL not defined!')
    }

    const url = process.env.DATABASE_URL?.replace('pluto', randomUUID())

    const mongo = await connectionDB('test', url)

    if (!mongo.connection.db) {
      throw new Error('MongoDB connection failed!')
    }

    return {
      async teardown() {
        const db = mongo.connection.db

        if (db) {
          const collections = await db.collections()
          for (const collection of collections) {
            await collection.deleteMany({})
          }

          await db.dropDatabase()
        }

        await mongo.connection.close()
      },
    }
  },
}
