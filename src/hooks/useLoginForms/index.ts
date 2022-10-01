import { AxiosResponse, AxiosError } from "axios";
import React from "react";
import { useMutation } from "react-query";

import { IAxiosErrorData } from "../../@types/APITypes";
import { IInputLoginData } from "../../@types/AuthTypes";
import { loginCooperative, loginUser } from "../../services/lib";
import { queryClient } from "../../services/queryClient/queryClient";
import { useToast } from "../useToast/index";

type LoginData = Partial<IInputLoginData>;

type LoginService = (loginData: IInputLoginData) => Promise<AxiosResponse>;

export function useLoginForms() {
  const { callToast } = useToast();
  const [loginData, setLoginData] = React.useState<LoginData | null>(null);
  const [loginService, setLoginService] = React.useState<LoginService>(
    () => loginUser
  );

  const mutation = useMutation(loginService, {
    onSuccess: (response) => {
      localStorage.setItem("coletaiToken", JSON.stringify(response));
    },
    onError: (data: AxiosError<IAxiosErrorData>) => {
      callToast({
        message: data.response?.data.message,
        id: 10,
        toastType: "error",
      });

      if (data.response?.status === 401) {
        setLoginData({ ...loginData, password: "" });
      } else {
        setLoginData(null);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries("login");
    },
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = event.target;
    const { value } = event.target;

    setLoginData({ ...loginData, [name]: value });
  };

  const setAxiosFunction = (route: "cooperatives" | "users") => {
    if (route === "cooperatives") {
      setLoginService(() => loginCooperative);
    } else {
      setLoginService(() => loginUser);
    }
  };

  const handleSubmitLoginData = async (event: React.FormEvent) => {
    event.preventDefault();

    await mutation.mutateAsync(loginData as IInputLoginData);
  };

  return {
    loginData,
    handleInputChange,
    handleSubmitLoginData,
    setAxiosFunction,
    mutation,
  };
}
