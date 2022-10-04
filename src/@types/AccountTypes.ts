export type Account = "cooperative" | "user";

export interface IAccountContext {
  account: Account | null;
  deleteAccount(): void;
  updateAccount(account: Account): void;
}

export interface IAccountData {
  token: string;
  account: Account;
}
