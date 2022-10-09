import React from "react";
import { useQuery } from "react-query";

import { CooperativeNameLocation } from "../../@types/CooperativeTypes";
import { getCooperativesNameLocation } from "../../services/lib";
import { useToast } from "../useToast/index";

export function useCooperativesData() {
  const [cooperatives, setCooperatives] = React.useState<
    CooperativeNameLocation[]
  >([]);
  const { callToast } = useToast();

  const { isFetching } = useQuery(
    ["cooperatives"],
    getCooperativesNameLocation,
    {
      onSuccess: ({ data }) => {
        setCooperatives(data);
      },
      onError: () => {
        callToast({
          message: "Falha ao buscar cooperativas",
          id: 50,
          toastType: "error",
        });
      },
    }
  );

  return { isFetching, cooperatives };
}
