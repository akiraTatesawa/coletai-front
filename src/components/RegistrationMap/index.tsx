import { LatLngLiteral } from "leaflet";
import { TileLayer, Marker, useMapEvents, Popup } from "react-leaflet";

import { Coords } from "../../@types/MapTypes";
import { useReverseGeocoding } from "../../hooks/useReverseGeocoding/index";
import { Fieldset, Map, Legend } from "./styles";

function LocationMarker({
  registrationCoords,
}: {
  registrationCoords: (coords: LatLngLiteral) => void;
}) {
  const { address, setMarkedPosition, markedPosition } = useReverseGeocoding();

  const map = useMapEvents({
    click: ({ latlng }) => {
      map.setView(latlng, 17);

      setMarkedPosition(latlng);
      registrationCoords({ lat: latlng.lat, lng: latlng.lng });
    },
  });

  return markedPosition ? (
    <Marker position={markedPosition}>
      <Popup>{address}</Popup>
    </Marker>
  ) : null;
}

interface RegistrationMapProps {
  currentLocation: Coords;
  registrationCoords: (coords: LatLngLiteral) => void;
}

export function RegistrationMap({
  currentLocation,
  registrationCoords,
}: RegistrationMapProps) {
  return (
    <Fieldset data-cy="map-registration">
      <Legend>
        <h3>Endereço</h3>
        <span>Selecione o endereço no mapa</span>
      </Legend>
      <Map center={currentLocation} zoom={15} scrollWheelZoom minZoom={12}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker registrationCoords={registrationCoords} />
      </Map>
    </Fieldset>
  );
}
