import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: fit-content;
  width: 100%;

  gap: 3rem;

  @media (min-width: 1025px) {
    margin: 0 auto;
    max-width: 1250px;
  }
`;
