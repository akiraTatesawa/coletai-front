import { InputHTMLAttributes } from "react";

import { InputContainer, StyledLabel, StyledInput } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  label: string;
}

export function Input({ id, name, label, ...props }: InputProps) {
  return (
    <InputContainer>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledInput id={id} name={name} autoComplete="off" {...props} />
    </InputContainer>
  );
}
