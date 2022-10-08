declare namespace Cypress {
  interface Account {
    name: string;
    email: string;
    password: string;
    latitude: number;
    longitude: number;
  }

  type CreateAccount = Omit<Account, "latitude" | "longitude">;

  interface Chainable<Subject = any> {
    resetDatabase(data: void): Chainable<void>;
    createAccount(accountType: "users" | "cooperatives"): Chainable<Account>;
  }
}
