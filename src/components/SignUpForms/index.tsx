import { LatLngLiteral } from "leaflet";
import { ChangeEvent, FormEvent, useState } from "react";

import { IInputRegistrationData } from "../../@types/CooperativeTypes";
import { useCurrentGeolocation } from "../../hooks/useCurrentGeolocation";
import { useSetRegistrationData } from "../../hooks/useSetRegistrationData/index";
import { useToast } from "../../hooks/useToast/index";
import { PrimaryButton } from "../Button";
import { Input } from "../Input";
import { RegistrationMap } from "../RegistrationMap/index";
import { Forms } from "./styles";

interface SignUpFormsProps {
  registrationName: "cooperativa" | "usuário";
}

type InputData = Partial<IInputRegistrationData>;

export function SignUpForms({ registrationName }: SignUpFormsProps) {
  const preposition = registrationName === "cooperativa" ? "da" : "do";
  const { currentLocation } = useCurrentGeolocation();
  const { callToast } = useToast();
  const { setPath } = useSetRegistrationData();
  const { create, isLoading } = setPath(registrationName);

  const [inputRegistrationData, setInputRegistrationData] =
    useState<InputData | null>(null);

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name } = event.target;
    const { value } = event.target;
    setInputRegistrationData({ ...inputRegistrationData, [name]: value });
  }

  async function handleRegistrationSubmit(event: FormEvent) {
    event.preventDefault();

    if (!inputRegistrationData?.latitude) {
      callToast({
        message: "Selecione um endereço no mapa",
        toastType: "error",
        id: 1,
      });
      return;
    }

    create(inputRegistrationData as IInputRegistrationData);
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
        disabled={isLoading}
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
        disabled={isLoading}
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
        disabled={isLoading}
      />

      {currentLocation && (
        <RegistrationMap
          registrationCoords={(coords: LatLngLiteral) =>
            setInputRegistrationData({
              ...inputRegistrationData,
              latitude: coords.lat,
              longitude: coords.lng,
            })
          }
          currentLocation={currentLocation}
        />
      )}

      <PrimaryButton type="submit" disabled={isLoading}>
        Cadastrar
      </PrimaryButton>
    </Forms>
  );
}
