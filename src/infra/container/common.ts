import { DependencyContainer, NotificationFactory } from 'plutin'

import HealthCheckMongo from '@infra/database/mongodb/health'
import { env } from '@infra/env'

DependencyContainer.registerValue('DiscordConfig', {
  dsn: env.DISCORD_WEBHOOK_URL,
  environment: env.ENVIRONMENT,
})

DependencyContainer.registerValue('SentryConfig', {
  dsn: env.SENTRY_DSN,
  environment: env.ENVIRONMENT,
})

DependencyContainer.register('HealthCheckDB', HealthCheckMongo, {
  singleton: true,
})

DependencyContainer.register(
  'IErrorNotifier',
  NotificationFactory.define(env.ENVIRONMENT),
  {
    singleton: true,
  }
)
