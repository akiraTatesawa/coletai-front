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

export const LoginContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  background-color: var(--surface-secondary);

  width: 100%;
  max-width: 700px;
  min-height: fit-content;

  border-radius: 10px;

  padding: 30px 15px;
`;

export const LoginTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--text-primary);

  @media (min-width: 600px) {
    font-size: 2rem;
  }
`;

export const LoginTypeContainer = styled.div`
  display: flex;

  justify-content: space-evenly;

  width: 100%;
  max-width: 260px;

  @media (min-width: 600px) {
    max-width: 320px;
  }
`;
