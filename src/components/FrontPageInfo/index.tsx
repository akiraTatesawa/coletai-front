import { TileLayer, Marker } from "react-leaflet";

import { Coords } from "../../@types/MapTypes";
import { useCurrentGeolocation } from "../../hooks/useCurrentGeolocation/index";
import { Container, Map, Title } from "./styles";

interface FrontPageMapProps {
  currentLocation: Coords;
}

function FrontPageMap({ currentLocation }: FrontPageMapProps) {
  return (
    <Map center={currentLocation} zoom={15} scrollWheelZoom>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={currentLocation} />
    </Map>
  );
}

export function FrontPageInfo() {
  const { currentLocation } = useCurrentGeolocation();

  return (
    <Container>
      <Title>Confira nossas cooperativas parceiras!</Title>

      {currentLocation && <FrontPageMap currentLocation={currentLocation} />}

      <span className="text-sm text-brand-700 font-medium">
        Feito com ❤️ por Arthur Akira
      </span>
    </Container>
  );
}
