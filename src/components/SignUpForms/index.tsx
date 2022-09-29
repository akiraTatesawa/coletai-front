import { LatLngLiteral } from "leaflet";
import { ChangeEvent, FormEvent, useState } from "react";

import { useCurrentGeolocation } from "../../hooks/useCurrentGeolocation";
import { PrimaryButton } from "../Button";
import { Input } from "../Input";
import { RegistrationMap } from "../RegistrationMap/index";
import { Forms } from "./styles";

interface SignUpFormsProps {
  registrationName: "cooperativa" | "usuário";
}

interface IInputRegistrationData {
  name?: string;
  email?: string;
  password?: string;
  coords?: LatLngLiteral;
}

export function SignUpForms({ registrationName }: SignUpFormsProps) {
  const preposition = registrationName === "cooperativa" ? "da" : "do";
  const { currentLocation } = useCurrentGeolocation();

  const [inputRegistrationData, setInputRegistrationData] =
    useState<IInputRegistrationData | null>(null);

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name } = event.target;
    const { value } = event.target;
    setInputRegistrationData({ ...inputRegistrationData, [name]: value });
  }

  function handleRegistrationSubmit(event: FormEvent) {
    event.preventDefault();

    if (!inputRegistrationData?.coords) {
      console.log("Missing data");
      return;
    }
    // setInputRegistrationData(null);

    console.log(inputRegistrationData);
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

      {currentLocation && (
        <RegistrationMap
          registrationCoords={(coords: LatLngLiteral) =>
            setInputRegistrationData({ ...inputRegistrationData, coords })
          }
          currentLocation={currentLocation}
        />
      )}

      <PrimaryButton type="submit">Cadastrar</PrimaryButton>
    </Forms>
  );
}
