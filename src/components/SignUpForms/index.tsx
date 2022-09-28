import { ChangeEvent, useState } from "react";

import { Input } from "../Input";
import { Forms } from "./styles";

interface SignUpFormsProps {
  registrationName: "cooperativa" | "usuário";
}

interface IInputRegistrationData {
  name?: string;
  email?: string;
  password?: string;
}

export function SignUpForms({ registrationName }: SignUpFormsProps) {
  const preposition = registrationName === "cooperativa" ? "da" : "do";

  const [inputRegistrationData, setInputRegistrationData] =
    useState<IInputRegistrationData | null>(null);

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name } = event.target;
    const { value } = event.target;

    setInputRegistrationData({ ...inputRegistrationData, [name]: value });
  }

  return (
    <Forms>
      <Input
        id="name"
        name="Nome"
        type="text"
        value={inputRegistrationData?.name}
        onChange={(e) => handleInputChange(e)}
        placeholder={`Nome ${preposition} ${registrationName}`}
        required
      />
      <Input
        id="email"
        name="Email"
        type="email"
        value={inputRegistrationData?.email}
        onChange={(e) => handleInputChange(e)}
        placeholder={`Email ${preposition} ${registrationName}`}
        required
      />
      <Input
        id="password"
        name="Senha"
        type="password"
        value={inputRegistrationData?.password}
        onChange={(e) => handleInputChange(e)}
        placeholder="Senha da conta"
        required
      />
    </Forms>
  );
}
