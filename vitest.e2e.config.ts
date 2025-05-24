import tsConfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    name: 'e2e',
    globals: true,
    root: './',
    include: ['./src/infra/controllers/**/*.spec.ts'],
    environment: './test/mongo.ts',
  },
  plugins: [tsConfigPaths()],
})
