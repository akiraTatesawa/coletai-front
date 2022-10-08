describe("Collection Actions", () => {
  beforeEach(() => {
    cy.resetDatabase();
  });

  it("Should be able to cancel a collection", () => {
    cy.createCollection().then(({ email, password }) => {
      cy.loginAccount({ email, password }, "cooperatives").then(() => {
        cy.visit("http://localhost:5173/");

        cy.get("[data-cy='dashboard']").click();

        cy.url().should("equal", "http://localhost:5173/dashboard");

        cy.get("[data-cy='button-cancel-collection']").click();

        cy.intercept({
          method: "PATCH",
          url: /cancel$/,
        }).as("cancelCollection");

        cy.get("[data-cy='button-confirm-cancel']").click();

        cy.wait("@cancelCollection");

        cy.get(".Toastify").should("contain", "Coleta cancelada");
      });
    });
  });

  it("Should be able to click on cancel collection and then exit the modal", () => {
    cy.createCollection().then(({ email, password }) => {
      cy.loginAccount({ email, password }, "cooperatives").then(() => {
        cy.visit("http://localhost:5173/");

        cy.get("[data-cy='dashboard']").click();

        cy.url().should("equal", "http://localhost:5173/dashboard");

        cy.get("[data-cy='button-cancel-collection']").click();

        cy.get("[data-cy='button-exit-cancel-modal']").click();

        cy.get("[data-cy='button-cancel-collection']").should("be.visible");
      });
    });
  });

  it("Should be able to finish a collection", () => {
    cy.createCollection().then(({ email, password }) => {
      cy.loginAccount({ email, password }, "cooperatives").then(() => {
        cy.visit("http://localhost:5173/");

        cy.get("[data-cy='dashboard']").click();

        cy.url().should("equal", "http://localhost:5173/dashboard");

        cy.intercept({
          method: "PATCH",
          url: /finish$/,
        }).as("finishCollection");

        cy.get("[data-cy='button-finish-collection']").click();

        cy.wait("@finishCollection");

        cy.get(".Toastify").should("contain", "Coleta finalizada");
      });
    });
  });
});
