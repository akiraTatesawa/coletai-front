import { MouseEventHandler, ReactNode } from "react";

import { Button } from "./styles";

interface PrimaryButtonProps {
  children: ReactNode;
  handleClick: MouseEventHandler<HTMLButtonElement>;
}

export function PrimaryButton({ handleClick, children }: PrimaryButtonProps) {
  return (
    <Button type="button" onClick={handleClick}>
      {children}
    </Button>
  );
}
