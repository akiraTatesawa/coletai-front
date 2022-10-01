import { AxiosResponse, AxiosError } from "axios";
import React from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

import { IAxiosErrorData } from "../../@types/APITypes";
import { IInputRegistrationData } from "../../@types/AuthTypes";
import { createNewCooperative, createNewUser } from "../../services/lib";
import { queryClient } from "../../services/queryClient/queryClient";
import { useToast } from "../useToast/index";

type RegistrationData = Partial<IInputRegistrationData>;

type RegistrationService = (
  registrationData: IInputRegistrationData
) => Promise<AxiosResponse>;

export function useRegistrationForms() {
  const { callToast } = useToast();
  const [registrationData, setRegistrationData] =
    React.useState<RegistrationData | null>(null);

  const [registrationService, setRegistrationService] =
    React.useState<RegistrationService>(() => createNewUser);

  const navigate = useNavigate();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = event.target;
    const { value } = event.target;

    setRegistrationData({ ...registrationData, [name]: value });
  };

  const setAxiosFunction = (registrationType: "cooperativa" | "usuário") => {
    if (registrationType === "cooperativa") {
      setRegistrationService(() => createNewCooperative);
    } else {
      setRegistrationService(() => createNewUser);
    }
  };

  const mutation = useMutation(registrationService, {
    onSuccess: () => {
      callToast({
        message: "Conta criada com sucesso",
        id: 9,
        toastType: "success",
      });

      setTimeout(() => navigate("/sign-in"), 600);
    },
    onError: (data: AxiosError<IAxiosErrorData>) => {
      callToast({
        message: data.response?.data.message,
        id: 2,
        toastType: "error",
      });

      setRegistrationData({ ...registrationData, email: "", password: "" });
    },
    onSettled: () => {
      queryClient.invalidateQueries("create");
    },
  });

  const handleSubmitLoginData = async (event: React.FormEvent) => {
    event.preventDefault();

    mutation.mutate(registrationData as IInputRegistrationData);
  };

  return {
    registrationData,
    handleInputChange,
    handleSubmitLoginData,
    setAxiosFunction,
    mutation,
  };
}
