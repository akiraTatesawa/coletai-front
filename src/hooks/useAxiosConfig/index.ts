import React from "react";

import { IAccountContext } from "../../@types/AccountTypes";
import { AccountContext } from "../../contexts/AccountContext";

export function useAxiosConfig() {
  const { accountData } = React.useContext(AccountContext) as IAccountContext;

  const config = {
    headers: {
      Authorization: `Bearer ${accountData?.token}`,
    },
  };

  return [config];
}
