import { defineConfig } from 'cypress'

export default defineConfig({
  env: {
    url: 'https://trello.com/home',
  },
  reporter: 'spec',
  e2e: {
    experimentalOriginDependencies: true,
    specPattern: 'cypress/integration/examples/tests/*.ts',
  },
})
