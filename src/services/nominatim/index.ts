import { AxiosResponse } from "axios";
import { LatLngLiteral } from "leaflet";

import { NominatimResponse } from "../../@types/MapTypes";
import { api } from "../lib";

export async function fetchAddress(markedPosition: LatLngLiteral) {
  const URL = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${markedPosition.lat}&lon=${markedPosition.lng}`;

  const promise: AxiosResponse<NominatimResponse> = await api.get(URL);

  return promise.data;
}
