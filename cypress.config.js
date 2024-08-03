const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportHeight: 1080, //Change the default resolution of the webpage to Full HD when running the scripts in UI mode
    viewportWidth: 1920,
    retries: 1, //Added 1 retry by default to reduce flakiness when running scripts
  },
});
