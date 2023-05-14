const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://venia.magento.com/',
    defaultCommandTimeout: 25000,
    chromeWebSecurity: false
  },
  fixturesFolder: false,
})