export type Account = "cooperative" | "user";

export interface IAccountContext {
  account: Account | null;
  deleteAccount(): void;
  createAccount(account: Account): void;
}
