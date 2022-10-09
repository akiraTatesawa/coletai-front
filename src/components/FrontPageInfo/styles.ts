import { MapContainer } from "react-leaflet";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  border-top: 1px solid rgba(108, 124, 128, 0.2);
  padding-top: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 2rem;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--text-primary);
  opacity: 0.8;

  text-align: center;

  @media (min-width: 600px) {
    font-size: 2rem;
  }
`;

export const Map = styled(MapContainer)`
  width: 100%;
  max-width: 600px;
  aspect-ratio: 1;

  border-radius: 5px;

  margin-top: 1.5rem;

  &:focus {
    outline-color: var(--brand);
    outline-width: 1px;
    outline-offset: 2px;
  }
`;
