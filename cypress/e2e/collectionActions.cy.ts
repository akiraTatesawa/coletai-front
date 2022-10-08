describe("Collection Actions", () => {
  beforeEach(() => {
    cy.resetDatabase();
  });

  it("Should be able to cancel a recommendation", () => {
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
});
