import React from "react";

import { IAccountContext, Account, IAccountData } from "../@types/AccountTypes";
import { useLocalStorage } from "../hooks/useLocalStorage/index";

export const AccountContext = React.createContext<IAccountContext | null>(null);

export function AccountProvider({ children }: { children: React.ReactNode }) {
  const [account, setAccount] = React.useState<Account | null>(null);
  const [accountData, setAccountData] = useLocalStorage<IAccountData | null>(
    "coletaiAccountData",
    null
  );

  const deleteAccount = () => {
    setAccountData(null);
  };

  const updateAccount = (account: Account) => {
    setAccount(account);
  };

  const saveAccount = (token: string) => {
    if (account) {
      setAccountData({
        account,
        token,
      });
    }
  };

  return (
    <AccountContext.Provider
      value={{ accountData, deleteAccount, updateAccount, saveAccount }}
    >
      {children}
    </AccountContext.Provider>
  );
}
