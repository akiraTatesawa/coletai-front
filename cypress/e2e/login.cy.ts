describe("Login", () => {
  beforeEach(() => {
    cy.resetDatabase();
  });

  it("Should be able to login an user", () => {
    cy.visit("http://localhost:5173/");

    cy.get("[data-cy='anchor-login']").click();

    cy.url().should("equal", "http://localhost:5173/sign-in");

    cy.createAccount("users").then(({ email, password }) => {
      cy.get("[data-cy='select-user-login']").click();

      cy.get("[data-cy='input-login-email']").type(email);
      cy.get("[data-cy='input-login-password']").type(password);

      cy.intercept("POST", "/users/sign-in").as("loginUser");

      cy.get("[data-cy='button-submit-login']").click();

      cy.wait("@loginUser");

      cy.url().should("equal", "http://localhost:5173/dashboard");
    });
  });

  it("Should be able to login a cooperative", () => {
    cy.visit("http://localhost:5173/");

    cy.get("[data-cy='anchor-login']").click();

    cy.url().should("equal", "http://localhost:5173/sign-in");

    cy.createAccount("cooperatives").then(({ email, password }) => {
      cy.get("[data-cy='select-cooperative-login']").click();

      cy.get("[data-cy='input-login-email']").type(email);
      cy.get("[data-cy='input-login-password']").type(password);

      cy.intercept("POST", "/cooperatives/sign-in").as("loginCooperative");

      cy.get("[data-cy='button-submit-login']").click();

      cy.wait("@loginCooperative");

      cy.url().should("equal", "http://localhost:5173/dashboard");
    });
  });
});
