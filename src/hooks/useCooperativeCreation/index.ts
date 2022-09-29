import { AxiosResponse, AxiosError } from "axios";
import { useMutation } from "react-query";

import { IAxiosErrorData } from "../../@types/APITypes";
import { createNewCooperative } from "../../services/lib";
import { queryClient } from "../../services/queryClient/queryClient";
import { useToast } from "../useToast/index";

export function useCooperativeCreation() {
  const { callToast } = useToast();

  const mutation = useMutation(createNewCooperative, {
    onSuccess: (response: AxiosResponse) => {
      callToast({
        message: "Cooperativa criada com sucesso",
        id: 4,
        toastType: "success",
      });
    },
    onError: (data: AxiosError<IAxiosErrorData>) => {
      callToast({
        message: data.response?.data.message,
        id: 5,
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
