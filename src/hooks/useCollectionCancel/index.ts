import { AxiosError } from "axios";
import { useMutation } from "react-query";

import { IAxiosErrorData } from "../../@types/APITypes";
import { cancelCollection } from "../../services/lib";
import { queryClient } from "../../services/queryClient/queryClient";
import { useAxiosConfig } from "../useAxiosConfig/index";
import { useCollectionList } from "../useCollectionList";
import { useToast } from "../useToast/index";

export function useCollectionCancel() {
  const [config] = useAxiosConfig();
  const { refetch } = useCollectionList(false);
  const { callToast } = useToast();

  const { mutate, isLoading: isCancelling } = useMutation(cancelCollection, {
    onSuccess: () => {
      callToast({
        message: "Coleta cancelada",
        toastType: "success",
        id: 35,
      });
      setTimeout(() => {
        refetch();
      }, 1000);
    },
    onError: ({ response }: AxiosError<IAxiosErrorData>) => {
      callToast({
        message: response?.data.message,
        id: 30,
        toastType: "error",
      });
    },
    onSettled: () => queryClient.invalidateQueries("cancel"),
  });

  const handleCancellation = (id: string) => {
    console.log(config);
    mutate({ config, id });
  };

  return { handleCancellation, isCancelling };
}
