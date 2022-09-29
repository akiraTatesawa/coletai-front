import { AxiosError, AxiosResponse } from "axios";
import { LatLngLiteral } from "leaflet";
import { ChangeEvent, FormEvent, useState } from "react";
import { useMutation } from "react-query";

import { IAxiosErrorData } from "../../@types/APITypes";
import { IInputRegistrationData } from "../../@types/CooperativeTypes";
import { useCurrentGeolocation } from "../../hooks/useCurrentGeolocation";
import { useToast } from "../../hooks/useToast/index";
import { createNewUser } from "../../services/lib";
import { queryClient } from "../../services/queryClient/queryClient";
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

  const [inputRegistrationData, setInputRegistrationData] =
    useState<InputData | null>(null);

  const { mutate, isLoading } = useMutation(createNewUser, {
    onSuccess: (response: AxiosResponse) => {
      console.log(response.data);
    },
    onError: (data: AxiosError<IAxiosErrorData>) => {
      callToast({
        message: data.response?.data.message,
        id: 2,
        toastType: "error",
      });
    },
    onSettled: () => {
      queryClient.invalidateQueries("create");
    },
  });

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name } = event.target;
    const { value } = event.target;
    setInputRegistrationData({ ...inputRegistrationData, [name]: value });
  }

  function handleRegistrationSubmit(event: FormEvent) {
    event.preventDefault();

    if (!inputRegistrationData?.latitude) {
      callToast({
        message: "Selecione um endereço no mapa",
        toastType: "error",
        id: 1,
      });
      return;
    }

    mutate(inputRegistrationData as IInputRegistrationData);

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
