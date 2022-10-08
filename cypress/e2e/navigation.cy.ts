describe("Front page navigation", () => {
  beforeEach(() => {
    cy.resetDatabase();
  });

  it("Should be able to visit the front page when not-logged", () => {
    cy.visit("http://localhost:5173/");

    cy.url().should("equal", "http://localhost:5173/");
  });

  it("Should be able to visit the front page when logged", () => {
    cy.createAccount("users").then(({ email, password }) => {
      cy.loginAccount({ email, password }, "users").then(() => {
        cy.visit("http://localhost:5173/");

        cy.url().should("equal", "http://localhost:5173/");
      });
    });
  });

  it("Should be able to go to the front page from the dashboard page when clicking the logotype", () => {
    cy.createAccount("users").then(({ email, password }) => {
      cy.loginAccount({ email, password }, "users").then(() => {
        cy.visit("http://localhost:5173/dashboard");

        cy.get("[data-cy='logotype']").click();

        cy.url().should("equal", "http://localhost:5173/");
      });
    });
  });

  it("Should be able to go to the front page from the sign up page", () => {
    cy.visit("http://localhost:5173/sign-up/user");

    cy.get("[data-cy='logotype']").click();

    cy.url().should("equal", "http://localhost:5173/");

    cy.visit("http://localhost:5173/sign-up/cooperative");

    cy.get("[data-cy='logotype']").click();

    cy.url().should("equal", "http://localhost:5173/");
  });
});

describe("Dashboard page navigation", () => {
  beforeEach(() => {
    cy.resetDatabase();
  });

  it("Should be able to go to the dashboard page from the front page", () => {
    cy.createAccount("users").then(({ email, password }) => {
      cy.loginAccount({ email, password }, "users").then(() => {
        cy.visit("http://localhost:5173");

        cy.get("[data-cy='dashboard']").click();

        cy.url().should("equal", "http://localhost:5173/dashboard");
      });
    });
  });

  it("Should be able to visit the dashboard page", () => {
    cy.createAccount("users").then(({ email, password }) => {
      cy.loginAccount({ email, password }, "users").then(() => {
        cy.visit("http://localhost:5173/dashboard");

        cy.url().should("equal", "http://localhost:5173/dashboard");
      });
    });
  });

  it("Should not be able to visit the dashboard page when not-logged", () => {
    cy.visit("http://localhost:5173/dashboard");

    cy.url().should("equal", "http://localhost:5173/");
  });
});

describe("Login page navigation", () => {
  beforeEach(() => {
    cy.resetDatabase();
  });

  it("Should be able to visit the login page", () => {
    cy.visit("http://localhost:5173/sign-in");

    cy.url().should("equal", "http://localhost:5173/sign-in");
  });

  it("Should be able to go to the login page from the front page", () => {
    cy.visit("http://localhost:5173");

    cy.get("[data-cy='anchor-login']").click();

    cy.url().should("equal", "http://localhost:5173/sign-in");
  });

  it("Should not be able to go to the login page when logged", () => {
    cy.createAccount("users").then(({ email, password }) => {
      cy.loginAccount({ email, password }, "users").then(() => {
        cy.visit("http://localhost:5173/sign-in");

        cy.url().should("equal", "http://localhost:5173/");
      });
    });
  });
});

describe("Sign up page navigation", () => {
  it("Should be able to visit the user sign up page", () => {
    cy.visit("http://localhost:5173/sign-up/user");

    cy.url().should("equal", "http://localhost:5173/sign-up/user");
  });

  it("Should be able to visit the cooperative sign up page", () => {
    cy.visit("http://localhost:5173/sign-up/cooperative");

    cy.url().should("equal", "http://localhost:5173/sign-up/cooperative");
  });

  it("Should be able to go to the user sign up page from the front page", () => {
    cy.visit("http://localhost:5173");

    cy.get("[data-cy='sign-up-user']").click();

    cy.url().should("equal", "http://localhost:5173/sign-up/user");
  });

  it("Should be able to go to the cooperative sign up page from the front page", () => {
    cy.visit("http://localhost:5173");

    cy.get("[data-cy='sign-up-cooperative']").click();

    cy.url().should("equal", "http://localhost:5173/sign-up/cooperative");
  });

  it("Should not be able to go to the sign up page when logged", () => {
    cy.createAccount("users").then(({ email, password }) => {
      cy.loginAccount({ email, password }, "users").then(() => {
        cy.visit("http://localhost:5173/sign-up/user");

        cy.url().should("equal", "http://localhost:5173/");
      });
    });
  });
});
