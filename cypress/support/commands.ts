/// <reference types="cypress" />
// ***********************************************
import {
  randEmail,
  randLatitude,
  randLongitude,
  randPassword,
  randUserName,
  randText,
} from "@ngneat/falso";
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//

Cypress.Commands.add("resetDatabase", () => {
  cy.request("DELETE", "http://localhost:4000/reset-database");
});

Cypress.Commands.add("createAccount", (accountType) => {
  const account = {
    name: randUserName(),
    email: randEmail(),
    password: randPassword(),
    latitude: randLatitude(),
    longitude: randLongitude(),
  };

  cy.request({
    method: "POST",
    url: `http://localhost:4000/${accountType}`,
    body: account,
    failOnStatusCode: false,
  }).then(() => cy.wrap(account));
});

Cypress.Commands.add("loginAccount", (accountData, accountType) => {
  cy.request({
    method: "POST",
    url: `http://localhost:4000/${accountType}/sign-in`,
    body: accountData,
    failOnStatusCode: false,
  }).then(({ body }) => {
    const account = accountType === "users" ? "user" : "cooperative";
    localStorage.setItem(
      "coletaiAccountData",
      JSON.stringify({ token: body.token, account })
    );
  });
});

Cypress.Commands.add("createCollection", () => {
  cy.createAccount("cooperatives").then(
    ({ email: cooperativeEmail, password: cooperativePassword }) => {
      cy.createAccount("users").then(({ email, password }) => {
        cy.loginAccount({ email, password }, "users").then(() => {
          const { token } = JSON.parse(
            localStorage.getItem("coletaiAccountData")
          );

          const collection = {
            types: [{ name: "Plástico" }],
            description: randText(),
          };

          const config = {
            Authorization: `Bearer ${token}`,
          };

          cy.request({
            method: "POST",
            url: "http://localhost:4000/collections",
            body: collection,
            headers: config,
            failOnStatusCode: false,
          }).then(() =>
            cy.wrap({ email: cooperativeEmail, password: cooperativePassword })
          );
        });
      });
    }
  );
});
