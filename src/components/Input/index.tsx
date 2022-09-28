import { InputHTMLAttributes } from "react";

import { InputContainer, StyledLabel, StyledInput } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
}

export function Input({ id, name, ...props }: InputProps) {
  return (
    <InputContainer>
      <StyledLabel htmlFor={id}>{name}</StyledLabel>
      <StyledInput id={id} name={name} autoComplete="off" {...props} />
    </InputContainer>
  );
}
