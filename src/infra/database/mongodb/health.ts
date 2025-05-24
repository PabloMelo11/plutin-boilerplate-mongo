import mongoose from 'mongoose'

export default class HealthCheckMongo {
  async check() {
    try {
      const dbConnected = mongoose.connection.readyState

      if (dbConnected === 0) {
        return false
      } else if (dbConnected === 1) {
        return true
      } else {
        return false
      }
    } catch {
      return false
    }
  }
}
