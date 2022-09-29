import { AxiosResponse, AxiosError } from "axios";
import { useMutation } from "react-query";

import { IAxiosErrorData } from "../../@types/APITypes";
import { createNewUser } from "../../services/lib";
import { queryClient } from "../../services/queryClient/queryClient";
import { useToast } from "../useToast/index";

export function useUserCreation() {
  const { callToast } = useToast();

  const mutation = useMutation(createNewUser, {
    onSuccess: (response: AxiosResponse) => {
      callToast({
        message: "Usuário criado com sucesso",
        id: 3,
        toastType: "success",
      });
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

  return {
    create: mutation.mutate,
    isLoading: mutation.isLoading,
    isSuccess: mutation.isSuccess,
    successData: mutation.data,
    errorData: mutation.error,
  };
}
