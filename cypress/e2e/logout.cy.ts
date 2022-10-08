describe("Logout", () => {
  beforeEach(() => {
    cy.resetDatabase();
  });

  it("Should be able to logout from the dashboard page", () => {
    cy.createAccount("users").then(({ email, password }) => {
      cy.loginAccount({ email, password }, "users").then(() => {
        cy.visit("http://localhost:5173/dashboard");

        cy.get("[data-cy='logout']").click();
        cy.get("[data-cy='logout-confirm']").click();

        cy.url().should("equal", "http://localhost:5173/");
        cy.get("[data-cy='dashboard']").should("not.exist");
        cy.get("[data-cy='sign-up-user']").should("be.visible");
      });
    });
  });

  it("Should be able to logout from the front page", () => {
    cy.createAccount("users").then(({ email, password }) => {
      cy.loginAccount({ email, password }, "users").then(() => {
        cy.visit("http://localhost:5173/");

        cy.get("[data-cy='logout']").click();
        cy.get("[data-cy='logout-confirm']").click();

        cy.url().should("equal", "http://localhost:5173/");
        cy.get("[data-cy='dashboard']").should("not.exist");
        cy.get("[data-cy='sign-up-user']").should("be.visible");
      });
    });
  });

  it("Should be able to cancel the logout", () => {
    cy.createAccount("users").then(({ email, password }) => {
      cy.loginAccount({ email, password }, "users").then(() => {
        cy.visit("http://localhost:5173/");

        cy.get("[data-cy='logout']").click();
        cy.get("[data-cy='logout-cancel']").click();

        cy.url().should("equal", "http://localhost:5173/");
        cy.get("[data-cy='sign-up-user']").should("not.exist");
        cy.get("[data-cy='dashboard']").should("be.visible");
      });
    });
  });
});
