import { ChangeEvent, FormEvent, useState } from "react";

import { PrimaryButton } from "../Button";
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

  function handleRegistrationSubmit(event: FormEvent) {
    event.preventDefault();
    setInputRegistrationData(null);
  }

  return (
    <Forms onSubmit={(e) => handleRegistrationSubmit(e)}>
      <Input
        id="name"
        label="Nome"
        name="name"
        type="text"
        value={inputRegistrationData?.name || ""}
        onChange={(e) => handleInputChange(e)}
        placeholder={`Nome ${preposition} ${registrationName}`}
        required
      />
      <Input
        id="email"
        label="Email"
        name="email"
        type="email"
        value={inputRegistrationData?.email || ""}
        onChange={(e) => handleInputChange(e)}
        placeholder={`Email ${preposition} ${registrationName}`}
        required
      />
      <Input
        id="password"
        label="Senha"
        name="password"
        type="password"
        value={inputRegistrationData?.password || ""}
        onChange={(e) => handleInputChange(e)}
        placeholder="Senha da conta"
        required
      />
      <PrimaryButton type="submit">Cadastrar</PrimaryButton>
    </Forms>
  );
}
