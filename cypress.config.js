const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  expose: {
    TAGS: process.env.TAGS || '',
  },
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
      return config;
    },
    supportFile: false,
    specPattern: 'cypress/E2E/**/*.feature',
  },
});
