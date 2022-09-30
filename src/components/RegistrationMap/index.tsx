import axios from "axios";
import { LatLng, LatLngLiteral } from "leaflet";
import { useState, useEffect } from "react";
import { TileLayer, Marker, useMapEvents, Popup } from "react-leaflet";

import { Coords } from "../../@types/MapTypes";
import { useToast } from "../../hooks/useToast/index";
import { Fieldset, Map, Legend } from "./styles";

function LocationMarker({
  registrationCoords,
}: {
  registrationCoords: (coords: LatLngLiteral) => void;
}) {
  const [markedPosition, setMarkedPosition] = useState<LatLng>();
  const [address, setAddress] = useState<string>("Sua localização");
  const { callToast } = useToast();

  const map = useMapEvents({
    click: ({ latlng }) => {
      map.setView(latlng, 17);

      setMarkedPosition(latlng);
      registrationCoords({ lat: latlng.lat, lng: latlng.lng });
    },
  });

  useEffect(() => {
    const abortController = new AbortController();

    if (markedPosition) {
      const promise = axios.get(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${markedPosition?.lat}&lon=${markedPosition?.lng}`
      );

      promise
        .then(({ data }) => {
          setAddress(
            `${data.address.road}, ${data.address.postcode}, ${data.address.city}, ${data.address.state}, ${data.address.country}`
          );
        })
        .catch(() =>
          callToast({
            message: "Houve um erro ao tentar buscar o endereço",
            toastType: "error",
            id: 9,
          })
        );
    }

    return () => {
      abortController.abort();
    };
  }, [markedPosition]);

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
    <Fieldset>
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
