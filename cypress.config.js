const { defineConfig } = require("cypress");

module.exports = defineConfig({
    projectId: '67wg6e',
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },

        specPattern: 'cypress/integration/examples/*.js',
        //everything with .js is inside spec

    },
});