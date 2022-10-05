import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { IAccountContext } from "../../@types/AccountTypes";
import { AccountContext } from "../../contexts/AccountContext";

export function useRouterRedirect() {
  const [currentPage, setCurrentPage] = React.useState<string>("");
  const { accountData } = React.useContext(AccountContext) as IAccountContext;
  const navigate = useNavigate();

  const handleLocation = () => {
    if (currentPage.startsWith("/sign-up") || currentPage === "/sign-in") {
      return accountData && navigate("/");
    }
    if (currentPage === "/dashboard") {
      return !accountData && navigate("/");
    }

    return null;
  };

  useEffect(() => {
    handleLocation();
  }, [currentPage]);

  return { setCurrentPage };
}
