import { Input } from "../Input";
import { Forms } from "./styles";

interface SignUpFormsProps {
  registrationName: "cooperativa" | "usuário";
}

export function SignUpForms({ registrationName }: SignUpFormsProps) {
  const preposition = registrationName === "cooperativa" ? "da" : "do";

  return (
    <Forms>
      <Input
        id="name"
        name="Nome"
        type="text"
        placeholder={`Nome ${preposition} ${registrationName}`}
        required
      />
      <Input
        id="email"
        name="Email"
        type="email"
        placeholder={`Email ${preposition} ${registrationName}`}
        required
      />
      <Input
        id="password"
        name="Senha"
        type="password"
        placeholder="Senha da conta"
        required
      />
    </Forms>
  );
}
