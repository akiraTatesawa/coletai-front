import React from "react";

import Cooperative from "../../assets/Factory.svg";
import User from "../../assets/Smiley.svg";
import { Button } from "./styles";

type LoginType = "cooperative" | "user";

interface LoginTypeButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loginType: LoginType;
  isSelected: boolean;
}

interface ButtonData {
  image: string;
  type: "cooperativa" | "usuário";
}

export function LoginTypeButton({
  loginType,
  isSelected,
  ...props
}: LoginTypeButtonProps) {
  const cooperativeData: ButtonData = {
    image: Cooperative,
    type: "cooperativa",
  };

  const userData: ButtonData = {
    image: User,
    type: "usuário",
  };

  const loginData: ButtonData =
    loginType === "cooperative" ? { ...cooperativeData } : { ...userData };

  return (
    <Button type="button" {...props} isSelected={isSelected}>
      <img src={loginData.image} alt={`${loginType} illustration`} />
      {loginData.type}
    </Button>
  );
}
