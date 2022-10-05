export type Account = "cooperative" | "user";

export interface IAccountData {
  token: string;
  account: Account;
}

export interface IAccountContext {
  accountData: IAccountData | null;
  deleteAccount(): void;
  updateAccount(account: Account): void;
  saveAccount(token: string): void;
}
