import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // ... your setup code here
    },
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}", // Make sure this matches your file structure
  },

  component: {
    devServer: {
      framework: "angular",
      bundler: "webpack",
    },
    specPattern: "**/*.cy.ts",
  },
});