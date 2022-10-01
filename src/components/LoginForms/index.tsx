import { useEffect } from "react";

import { useLoginForms } from "../../hooks/useLoginForms/index";
import { PrimaryButton } from "../Button";
import { Input } from "../Input";
import { Forms } from "./styles";

interface LoginFormsProps {
  route: "cooperatives" | "users" | null;
}

export function LoginForms({ route }: LoginFormsProps) {
  const {
    loginData,
    handleInputChange,
    handleSubmitLoginData,
    setAxiosFunction,
    mutation,
  } = useLoginForms();

  useEffect(() => {
    if (route) {
      setAxiosFunction(route);
    }
  }, [route]);

  return (
    <Forms onSubmit={handleSubmitLoginData}>
      <Input
        id="email"
        label="Email"
        name="email"
        type="email"
        value={loginData?.email || ""}
        placeholder="Email da conta"
        onChange={handleInputChange}
        required
        disabled={mutation.isLoading}
      />
      <Input
        id="password"
        label="Senha"
        name="password"
        type="password"
        value={loginData?.password || ""}
        placeholder="Senha da conta"
        onChange={handleInputChange}
        required
        disabled={mutation.isLoading}
      />

      <PrimaryButton type="submit">Entrar</PrimaryButton>
    </Forms>
  );
}
