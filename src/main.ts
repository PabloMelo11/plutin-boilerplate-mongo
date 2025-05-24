import { FastifyAdapter, GlobalErrorHandler } from 'plutin'

import { connectionDB } from '@infra/database/mongodb/connection'
import { env } from '@infra/env'
import { registerRoutes } from '@infra/routes'

const http = new FastifyAdapter(env)

async function main() {
  const globalErrorHandler = new GlobalErrorHandler(env)
  globalErrorHandler.register()
  await connectionDB(env.ENVIRONMENT, env.DATABASE_URL)
  registerRoutes(http)
  http.startServer(env.PORT)
}

main()

export { http }
