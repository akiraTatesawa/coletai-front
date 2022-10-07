import { AxiosError } from "axios";
import { useMutation } from "react-query";

import { IAxiosErrorData } from "../../@types/APITypes";
import { finishCollection } from "../../services/lib";
import { queryClient } from "../../services/queryClient/queryClient";
import { useAxiosConfig } from "../useAxiosConfig/index";
import { useCollectionList } from "../useCollectionList/index";
import { useToast } from "../useToast/index";

export function useCollectionFinish() {
  const [config] = useAxiosConfig();
  const { refetch } = useCollectionList(false);
  const { callToast } = useToast();

  const { mutateAsync, isLoading: isFinishing } = useMutation(
    finishCollection,
    {
      onSuccess: () => {
        callToast({
          message: "Coleta finalizada",
          toastType: "success",
          id: 40,
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
    }
  );

  const handleFinishCollection = async (id: string) => {
    await mutateAsync({ config, id });
  };

  return { handleFinishCollection, isFinishing };
}
