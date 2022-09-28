import { HTMLInputTypeAttribute, useState } from "react";

export function useTogglePasswordVisibility() {
  const [isPasswordVisible, setPasswordVisible] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const setPasswordVisibilityType = (
    type: HTMLInputTypeAttribute | undefined
  ) => {
    if (type === "password") {
      const updatedType = isPasswordVisible ? "text" : type;

      return updatedType;
    }
    return type;
  };

  return {
    isPasswordVisible,
    togglePasswordVisibility,
    setPasswordVisibilityType,
  };
}
