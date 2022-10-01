import { PrimaryButton } from "../Button";
import { Input } from "../Input";
import { Forms } from "./styles";

export function LoginForms() {
  return (
    <Forms>
      <Input
        id="email"
        label="Email"
        name="email"
        type="email"
        placeholder="Email da conta"
      />
      <Input
        id="password"
        label="Senha"
        name="password"
        type="password"
        placeholder="Senha da conta"
      />

      <PrimaryButton type="submit">Entrar</PrimaryButton>
    </Forms>
  );
}
