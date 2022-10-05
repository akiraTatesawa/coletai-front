import { AxiosError } from "axios";
import React from "react";
import { useMutation } from "react-query";

import { IAccountData } from "../../@types/AccountTypes";
import { IAxiosErrorData } from "../../@types/APITypes";
import {
  CreateCollectionFormData,
  RecyclingTypes,
} from "../../@types/CollectionTypes";
import { createCollection } from "../../services/lib";
import { queryClient } from "../../services/queryClient/queryClient";
import { useLocalStorage } from "../useLocalStorage/index";
import { useToast } from "../useToast/index";

export function useCollectionCreate() {
  const [accountData] = useLocalStorage<IAccountData | null>(
    "coletaiAccountData",
    null
  );

  const config = {
    headers: {
      Authorization: `Bearer ${accountData?.token}`,
    },
  };

  const { callToast } = useToast();
  const [formData, setFormData] = React.useState<CreateCollectionFormData>({
    types: [],
    description: "",
  });

  const { mutate, isLoading } = useMutation(createCollection, {
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
  };
}
