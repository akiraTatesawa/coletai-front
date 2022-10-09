import { MapContainer } from "react-leaflet";
import styled from "styled-components";

export const Fieldset = styled.fieldset`
  width: 100%;
`;

export const Legend = styled.legend`
  color: var(--text-secondary);

  width: 100%;

  margin-bottom: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > h3 {
    font-size: 1rem;
  }

  > span {
    font-size: 0.8rem;
    line-height: 1rem;
  }
`;

export const Map = styled(MapContainer)`
  height: 30vh;
  width: 100%;

  border-radius: 10px;

  &:focus {
    outline-color: var(--brand);
    outline-width: 1px;
    outline-offset: 2px;
  }

  @media (min-width: 600px) {
    height: 45vh;
  }
`;
