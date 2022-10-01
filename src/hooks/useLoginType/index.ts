import { useState } from "react";

export function useLoginType() {
  const [isCooperative, setIsCooperative] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const [route, setRoute] = useState<"cooperatives" | "users" | null>(null);

  const handleUserClick = () => {
    setIsCooperative(false);
    setIsUser(true);
    setRoute("users");
  };

  const handleCooperativeClick = () => {
    setIsUser(false);
    setIsCooperative(true);
    setRoute("cooperatives");
  };

  return {
    isCooperative,
    isUser,
    route,
    handleCooperativeClick,
    handleUserClick,
  };
}
