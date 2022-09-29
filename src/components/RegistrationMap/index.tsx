import { TileLayer } from "react-leaflet";

import { useCurrentGeolocation } from "../../hooks/useCurrentGeolocation/index";
import { Fieldset, Map, Legend } from "./styles";

export function RegistrationMap() {
  const { currentLocation } = useCurrentGeolocation();

  return (
    currentLocation && (
      <Fieldset>
        <Legend>
          <h3>Endereço</h3>
          <span>Selecione o endereço no mapa</span>
        </Legend>
        <Map center={currentLocation} zoom={15} scrollWheelZoom>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </Map>
      </Fieldset>
    )
  );
}
