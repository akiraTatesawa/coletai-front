import { AxiosResponse } from "axios";
import React from "react";
import { useQuery } from "react-query";

import { IAccountContext } from "../../@types/AccountTypes";
import { CollectionData } from "../../@types/CollectionTypes";
import { AccountContext } from "../../contexts/AccountContext";
import {
  getCooperativeCollections,
  getUserCollections,
} from "../../services/lib";
import { useToast } from "../useToast/index";

export function useCollectionList(enabled = true) {
  const { callToast } = useToast();
  const { accountData } = React.useContext(AccountContext) as IAccountContext;
  const [collections, setCollections] = React.useState<CollectionData[] | null>(
    null
  );

  const config = {
    headers: {
      Authorization: `Bearer ${accountData?.token}`,
    },
  };

  const fetchFunction =
    accountData?.account === "user"
      ? getUserCollections
      : getCooperativeCollections;

  const { refetch, isFetching } = useQuery(
    ["collections", config],
    () => fetchFunction(config),
    {
      onSuccess: ({ data }: AxiosResponse<CollectionData[]>) => {
        setCollections(data);
      },
      onError: () => {
        callToast({
          message: "Falha ao buscar coletas",
          toastType: "error",
          id: 25,
        });
      },
      enabled: enabled && !!accountData,
    }
  );

  return { collections, refetch, isFetching };
}
