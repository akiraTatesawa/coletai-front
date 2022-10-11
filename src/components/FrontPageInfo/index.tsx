import { TileLayer, Marker, Popup } from "react-leaflet";

import { CooperativeNameLocation } from "../../@types/CooperativeTypes";
import { Coords } from "../../@types/MapTypes";
import { useCooperativesData } from "../../hooks/useCooperativesData";
import { useCurrentGeolocation } from "../../hooks/useCurrentGeolocation/index";
import { Container, Map, Title } from "./styles";

interface FrontPageMapProps {
  currentLocation: Coords;
  cooperatives: CooperativeNameLocation[];
}

function FrontPageMap({ currentLocation, cooperatives }: FrontPageMapProps) {
  return (
    <Map center={currentLocation} zoom={15} scrollWheelZoom>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {cooperatives.map(({ name, latitude: lat, longitude: lng }) => (
        <Marker key={name} position={{ lat, lng }}>
          <Popup>{name}</Popup>
        </Marker>
      ))}
    </Map>
  );
}

export function FrontPageInfo() {
  const { currentLocation } = useCurrentGeolocation();
  const { cooperatives } = useCooperativesData();

  return (
    <Container>
      <Title>Confira nossas cooperativas parceiras!</Title>

      {currentLocation && (
        <FrontPageMap
          cooperatives={cooperatives}
          currentLocation={currentLocation}
        />
      )}

      <span className="text-sm text-brand-text-secondary">
        Feito com ❤️ por{" "}
        <a
          href="https://github.com/akiraTatesawa"
          target="_blank"
          rel="noreferrer"
          className="text-info-400 focus:outline-info-500 font-medium"
        >
          Arthur Akira
        </a>
      </span>
    </Container>
  );
}
