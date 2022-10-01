import { useEffect } from "react";

import { useCurrentGeolocation } from "../../hooks/useCurrentGeolocation";
import { useRegistrationForms } from "../../hooks/useRegistrationForms/index";
import { PrimaryButton } from "../Button";
import { Input } from "../Input";
import { RegistrationMap } from "../RegistrationMap/index";
import { Forms } from "./styles";

interface SignUpFormsProps {
  registrationName: "cooperativa" | "usuário";
}

export function SignUpForms({ registrationName }: SignUpFormsProps) {
  const preposition = registrationName === "cooperativa" ? "da" : "do";
  const { currentLocation } = useCurrentGeolocation();
  const {
    registrationData,
    handleInputChange,
    handleSubmitLoginData,
    setAxiosFunction,
    mutation,
    setCoords,
  } = useRegistrationForms();

  useEffect(() => {
    if (registrationName) {
      setAxiosFunction(registrationName);
    }
  }, [registrationName]);

  return (
    <Forms onSubmit={handleSubmitLoginData}>
      <Input
        id="name"
        label="Nome"
        name="name"
        type="text"
        value={registrationData?.name || ""}
        onChange={handleInputChange}
        placeholder={`Nome ${preposition} ${registrationName}`}
        required
        disabled={mutation.isLoading}
      />
      <Input
        id="email"
        label="Email"
        name="email"
        type="email"
        value={registrationData?.email || ""}
        onChange={handleInputChange}
        placeholder={`Email ${preposition} ${registrationName}`}
        required
        disabled={mutation.isLoading}
      />
      <Input
        id="password"
        label="Senha"
        name="password"
        type="password"
        value={registrationData?.password || ""}
        onChange={handleInputChange}
        placeholder="Senha da conta"
        required
        disabled={mutation.isLoading}
      />

      {currentLocation && (
        <RegistrationMap
          registrationCoords={setCoords}
          currentLocation={currentLocation}
        />
      )}

      <PrimaryButton type="submit" disabled={mutation.isLoading}>
        Cadastrar
      </PrimaryButton>
    </Forms>
  );
}
