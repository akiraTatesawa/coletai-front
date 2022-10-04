import React from "react";

import { IAccountContext, Account } from "../@types/AccountTypes";

export const AccountContext = React.createContext<IAccountContext | null>(null);

export function AccountProvider({ children }: { children: React.ReactNode }) {
  const [account, setAccount] = React.useState<Account | null>(null);

  const deleteAccount = () => {
    setAccount(null);
  };

  const updateAccount = (account: Account) => {
    setAccount(account);
  };

  return (
    <AccountContext.Provider value={{ account, deleteAccount, updateAccount }}>
      {children}
    </AccountContext.Provider>
  );
}
