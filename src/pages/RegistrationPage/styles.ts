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

export const RegistrationContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  background-color: var(--surface-secondary);

  width: 100%;
  max-width: 700px;
  height: fit-content;

  border-radius: 10px;

  padding: 30px 15px;
`;

export const RegistrationTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--text-primary);

  @media (min-width: 600px) {
    font-size: 2rem;
  }
`;
