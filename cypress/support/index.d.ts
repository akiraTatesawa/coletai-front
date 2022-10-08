declare namespace Cypress {
  interface User {
    name: string;
    email: string;
    password: string;
    latitude: number;
    longitude: number;
  }

  type CreateUser = Omit<User, "latitude" | "longitude">;

  interface Chainable<Subject = any> {
    resetDatabase(data: void): Chainable<void>;
    createUser(): CreateUser;
  }
}
