const { defineConfig } = require('cypress')

module.exports = defineConfig({
  env: {
    url: 'https://trello.com/home',
  },
  reporter: 'spec',
  e2e: {
    experimentalOriginDependencies: true,
    setupNodeEvents(on, config) {},
    specPattern: 'cypress/integration/examples/tests/*.js',
  },
})
