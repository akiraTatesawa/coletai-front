declare namespace Cypress {
  interface Account {
    name: string;
    email: string;
    password: string;
    latitude: number;
    longitude: number;
  }

  type CreateAccount = Omit<Account, "latitude" | "longitude">;
  type LoginAccount = Pick<Account, "email" | "password">;

  type AccountType = "users" | "cooperatives";

  interface Token {
    token: string;
  }

  interface Chainable<Subject = any> {
    resetDatabase(data: void): Chainable<void>;
    createAccount(accountType: AccountType): Chainable<Account>;
    loginAccount(
      loginData: LoginAccount,
      accountType: AccountType
    ): Chainable<Token>;
    createCollection(): Chainable<LoginAccount>;
  }
}
