import { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from "react";

import { Button } from "./styles";

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  isDisabled: boolean;
}

export function PrimaryButton({
  type = "button",
  handleClick,
  children,
  isDisabled,
}: PrimaryButtonProps) {
  return (
    <Button disabled={isDisabled} type={type} onClick={handleClick}>
      {children}
    </Button>
  );
}

PrimaryButton.defaultProps = {
  handleClick: undefined,
};
