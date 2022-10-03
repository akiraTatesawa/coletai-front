import { LatLngLiteral } from "leaflet";
import { useState, useEffect } from "react";
import { useQuery } from "react-query";

import { NominatimResponse } from "../../@types/MapTypes";
import { fetchAddress } from "../../services/nominatim";
import { useToast } from "../useToast/index";

export function useReverseGeocoding() {
  const { callToast } = useToast();
  const [address, setAddress] = useState<string>("");
  const [markedPosition, setMarkedPosition] = useState<LatLngLiteral | null>(
    null
  );

  const mountAddress = ({ address }: NominatimResponse) =>
    `${address.road}, ${address.postcode}, ${address.city}, ${address.state}, ${address.country}`;

  const { refetch } = useQuery(
    ["address", markedPosition],
    () => fetchAddress(markedPosition),
    {
      onSuccess: (data) => {
        setAddress(mountAddress(data));
      },
      onError: () => {
        callToast({
          message: "Falha ao localizar o endereço",
          toastType: "error",
          id: 20,
        });
      },
      refetchOnWindowFocus: false,
      enabled: false,
    }
  );

  useEffect(() => {
    if (markedPosition) {
      refetch();
    }
  }, [markedPosition]);

  return { address, setMarkedPosition, markedPosition };
}
