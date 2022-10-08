import { randText } from "@ngneat/falso";

describe("Create a collection", () => {
  beforeEach(() => {
    cy.resetDatabase();
    cy.createAccount("cooperatives");
  });

  it("Should be able to create a recommendation", () => {
    cy.createAccount("users").then(({ email, password }) => {
      cy.loginAccount({ email, password }, "users").then(() => {
        const description = randText();

        cy.visit("http://localhost:5173/");

        cy.get("[data-cy='dashboard']").click();

        cy.url().should("equal", "http://localhost:5173/dashboard");

        cy.get("[data-cy='create-collection-icon']").click();
        cy.get("[data-cy='Metal-type']").click();
        cy.get("[data-cy='textarea-description']").type(description);

        cy.intercept("POST", "/collections").as("createCollection");

        cy.get("[data-cy='button-submit-collection']").click();

        cy.wait("@createCollection");

        cy.get(".Toastify").contains("Coleta criada com sucesso");
      });
    });
  });

  it("Should not be able to create a collection without selecting a type", () => {
    cy.createAccount("users").then(({ email, password }) => {
      cy.loginAccount({ email, password }, "users").then(() => {
        cy.visit("http://localhost:5173/");

        cy.get("[data-cy='dashboard']").click();

        cy.url().should("equal", "http://localhost:5173/dashboard");

        cy.get("[data-cy='create-collection-icon']").click();
        cy.get("[data-cy='textarea-description']").type(randText());

        cy.get("[data-cy='button-submit-collection']").click();

        cy.wait(500);

        cy.get(".Toastify").contains(
          "Selecione pelo menos 1 tipo de reciclagem"
        );
      });
    });
  });
});
