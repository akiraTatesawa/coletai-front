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
        <Marker position={{ lat, lng }}>
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

      <span className="text-sm text-brand-700 font-medium">
        Feito com ❤️ por Arthur Akira
      </span>
    </Container>
  );
}
