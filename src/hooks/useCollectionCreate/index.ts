import { AxiosError } from "axios";
import React from "react";
import { useMutation } from "react-query";

import { IAxiosErrorData } from "../../@types/APITypes";
import {
  CreateCollectionFormData,
  RecyclingTypes,
} from "../../@types/CollectionTypes";
import { createCollection } from "../../services/lib";
import { queryClient } from "../../services/queryClient/queryClient";
import { useAxiosConfig } from "../useAxiosConfig/index";
import { useLogout } from "../useLogout/index";
import { useToast } from "../useToast/index";

export function useCollectionCreate() {
  const [config] = useAxiosConfig();
  const { handleLogout } = useLogout();
  const { callToast } = useToast();

  const [formData, setFormData] = React.useState<CreateCollectionFormData>({
    types: [],
    description: "",
  });

  const { mutate, isLoading, isSuccess } = useMutation(createCollection, {
    onSuccess: () => {
      callToast({
        message: "Coleta criada com sucesso",
        toastType: "success",
        id: 90,
      });
    },
    onError: (data: AxiosError<IAxiosErrorData>) => {
      callToast({
        message: data.response?.data.message,
        id: 10,
        toastType: "error",
      });

      if (data.response?.status === 404) {
        setTimeout(() => {
          handleLogout();
        }, 1500);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries("create");
    },
  });

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name } = event.target;
    const { value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTypeChange = (recyclingType: RecyclingTypes) => {
    // If exists, remove it. If not, add it
    if (formData.types.some(({ name }) => recyclingType.name === name)) {
      setFormData({
        ...formData,
        types: [
          ...formData.types.filter(({ name }) => name !== recyclingType.name),
        ],
      });
    } else {
      setFormData({ ...formData, types: [...formData.types, recyclingType] });
    }
  };

  const handleCollectionSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.types[0]) {
      callToast({
        message: "Selecione pelo menos 1 tipo de reciclagem",
        id: 20,
        toastType: "error",
      });

      return;
    }

    mutate({ collectionData: formData, config });
  };

  return {
    formData,
    handleDescriptionChange,
    handleTypeChange,
    handleCollectionSubmit,
    isLoading,
    isSuccess,
  };
}
