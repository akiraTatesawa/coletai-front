declare namespace Cypress {
  interface Chainable<Subject = any> {
    resetDatabase(data: void): Chainable<void>;
  }
}
