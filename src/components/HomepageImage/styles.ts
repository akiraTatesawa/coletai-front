import styled from "styled-components";

export const Image = styled.img`
  width: 100%;
  max-width: 700px;
  height: auto;

  aspect-ratio: 3/2;

  @media (min-width: 1025px) {
    width: 50%;
  }
`;
