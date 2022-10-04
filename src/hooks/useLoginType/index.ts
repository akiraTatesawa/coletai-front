import { useContext, useState } from "react";

import { IAccountContext } from "../../@types/AccountTypes";
import { AccountContext } from "../../contexts/AccountContext";

export function useLoginType() {
  const [isCooperative, setIsCooperative] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const [route, setRoute] = useState<"cooperatives" | "users" | null>(null);
  const { updateAccount } = useContext(AccountContext) as IAccountContext;

  const handleUserClick = () => {
    setIsCooperative(false);
    setIsUser(true);
    setRoute("users");
    updateAccount("user");
  };

  const handleCooperativeClick = () => {
    setIsUser(false);
    setIsCooperative(true);
    setRoute("cooperatives");
    updateAccount("cooperative");
  };

  return {
    isCooperative,
    isUser,
    route,
    handleCooperativeClick,
    handleUserClick,
  };
}
