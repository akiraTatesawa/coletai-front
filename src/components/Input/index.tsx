import {
  ButtonHTMLAttributes,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
} from "react";

import { useTogglePasswordVisibility } from "../../hooks/useTogglePasswordVisibility/index";
import {
  Button,
  InputContainer,
  StyledLabel,
  StyledInput,
  SlashEyeIcon,
  OpenEyeIcon,
} from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  label: string;
  type: HTMLInputTypeAttribute;
}

interface ButtonEyeIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isVisible: boolean;
}

function ButtonEyeIcon({ isVisible, ...props }: ButtonEyeIconProps) {
  const icon = isVisible ? <SlashEyeIcon /> : <OpenEyeIcon />;

  return (
    <Button type="button" {...props}>
      {icon}
    </Button>
  );
}

export function Input({ id, name, label, type, ...props }: InputProps) {
  const {
    isPasswordVisible,
    togglePasswordVisibility,
    setPasswordVisibilityType,
  } = useTogglePasswordVisibility();

  const eyeButton = type === "password" && (
    <ButtonEyeIcon
      isVisible={isPasswordVisible}
      onClick={() => togglePasswordVisibility()}
    />
  );

  return (
    <InputContainer>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>

      <StyledInput
        id={id}
        name={name}
        autoComplete="off"
        type={setPasswordVisibilityType(type)}
        {...props}
      />

      {eyeButton}
    </InputContainer>
  );
}
