export type Coords = [number, number];

type NominatimAddress = {
  road: string;
  village: string;
  state_district: string;
  state: string;
  postcode: string;
  country: string;
  country_code: string;
};

export interface NominatimResponse {
  display_name: string;
  name: string;
  address: NominatimAddress;
}
