import { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from "react";

import { Loader } from "../Loader";
import { Button } from "./styles";

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export function PrimaryButton({
  type = "button",
  handleClick,
  children,
  ...props
}: PrimaryButtonProps) {
  return (
    <Button {...props} type={type} onClick={handleClick}>
      {props.disabled ? <Loader /> : children}
    </Button>
  );
}

PrimaryButton.defaultProps = {
  handleClick: undefined,
};
