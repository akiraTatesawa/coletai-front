import { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from "react";

import { Button } from "./styles";

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export function PrimaryButton({
  type = "button",
  handleClick,
  children,
}: PrimaryButtonProps) {
  return (
    <Button type={type} onClick={handleClick}>
      {children}
    </Button>
  );
}

PrimaryButton.defaultProps = {
  handleClick: undefined,
};
