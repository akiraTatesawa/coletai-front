import React from "react";
import { useNavigate } from "react-router-dom";

import { IAccountContext } from "../../@types/AccountTypes";
import { AccountContext } from "../../contexts/AccountContext";

export function useLogout() {
  const { deleteAccount } = React.useContext(AccountContext) as IAccountContext;
  const navigate = useNavigate();

  const handleLogout = () => {
    deleteAccount();
    navigate("/");
  };

  return { handleLogout };
}
