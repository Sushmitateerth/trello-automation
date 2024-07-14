const { defineConfig } = require('cypress')

module.exports = defineConfig({
  env: {
    url: 'https://trello.com/home',
  },
  e2e: {
    experimentalOriginDependencies: true,
    setupNodeEvents(on, config) {},
    specPattern: 'cypress/integration/examples/tests/*.js',
  },
})
