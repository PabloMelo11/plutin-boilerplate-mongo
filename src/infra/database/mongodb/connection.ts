import mongoose from 'mongoose'
import { logger } from 'plutin'

export async function connectionDB(env: string, databaseURL: string) {
  try {
    const connected = await mongoose.connect(databaseURL)

    if (env !== 'test') {
      logger.info('DB connected')
    }

    return connected
  } catch (err) {
    logger.warn('Error connection DB: ', err)
    throw new Error('Error connection DB')
  }
}
