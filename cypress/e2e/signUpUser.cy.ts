import { randUserName, randEmail, randPassword } from "@ngneat/falso";

describe("User Registration", () => {
  beforeEach(() => {
    cy.resetDatabase();
  });

  it("Should be able to register an user", () => {
    cy.visit("http://localhost:5173/");

    cy.get("[data-cy='sign-up-user']").click();

    cy.url().should("equal", "http://localhost:5173/sign-up/user");

    const user = {
      name: randUserName(),
      email: randEmail(),
      password: randPassword(),
    };

    cy.get("[data-cy='input-account-name']").type(user.name);
    cy.get("[data-cy='input-account-email']").type(user.email);
    cy.get("[data-cy='input-account-password']").type(user.password);
    cy.get("[data-cy='map-registration']").click();

    cy.intercept("POST", "/users").as("createUser");

    cy.get("[data-cy='button-submit-registration']").click();

    cy.wait("@createUser");

    cy.get(".Toastify").should("contain", "Conta criada com sucesso");

    cy.url().should("equal", "http://localhost:5173/sign-in");
  });

  it("Should not be able to create an user if map was not clicked", () => {
    cy.visit("http://localhost:5173/");

    cy.get("[data-cy='sign-up-user']").click();

    cy.url().should("equal", "http://localhost:5173/sign-up/user");

    const user = {
      name: randUserName(),
      email: randEmail(),
      password: randPassword(),
    };

    cy.get("[data-cy='input-account-name']").type(user.name);
    cy.get("[data-cy='input-account-email']").type(user.email);
    cy.get("[data-cy='input-account-password']").type(user.password);

    cy.get("[data-cy='button-submit-registration']").click();

    cy.get(".Toastify").should("contain", "Selecione um endereço no mapa");
  });
});
