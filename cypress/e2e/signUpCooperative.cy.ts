import { randUserName, randEmail, randPassword } from "@ngneat/falso";

describe("Cooperative Registration", () => {
  beforeEach(() => {
    cy.resetDatabase();
  });

  it("Should be able to register a cooperative", () => {
    cy.visit("http://localhost:5173/");

    cy.get("[data-cy='sign-up-cooperative']").click();

    cy.url().should("equal", "http://localhost:5173/sign-up/cooperative");

    const cooperative = {
      name: randUserName(),
      email: randEmail(),
      password: randPassword(),
    };

    cy.get("[data-cy='input-account-name']").type(cooperative.name);
    cy.get("[data-cy='input-account-email']").type(cooperative.email);
    cy.get("[data-cy='input-account-password']").type(cooperative.password);
    cy.get("[data-cy='map-registration']").click();

    cy.intercept("POST", "/cooperatives").as("createCooperative");

    cy.get("[data-cy='button-submit-registration']").click();

    cy.wait("@createCooperative");

    cy.get(".Toastify").should("contain", "Conta criada com sucesso");

    cy.url().should("equal", "http://localhost:5173/sign-in");
  });

  it("Should not be able to create a cooperative if map was not clicked", () => {
    cy.visit("http://localhost:5173/");

    cy.get("[data-cy='sign-up-cooperative']").click();

    cy.url().should("equal", "http://localhost:5173/sign-up/cooperative");

    const cooperative = {
      name: randUserName(),
      email: randEmail(),
      password: randPassword(),
    };

    cy.get("[data-cy='input-account-name']").type(cooperative.name);
    cy.get("[data-cy='input-account-email']").type(cooperative.email);
    cy.get("[data-cy='input-account-password']").type(cooperative.password);

    cy.get("[data-cy='button-submit-registration']").click();

    cy.get(".Toastify").should("contain", "Selecione um endereço no mapa");
  });
});
