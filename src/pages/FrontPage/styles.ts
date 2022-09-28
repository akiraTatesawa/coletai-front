import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100%;
  width: 100%;

  gap: 3rem;

  @media (min-width: 1025px) {
    margin: 0 auto;
    max-width: 1250px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  width: 100%;

  @media (min-width: 1025px) {
    flex-direction: row;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;

  width: 100%;
`;

export const Redirect = styled.p`
  font-size: 1rem;
  color: var(--text-secondary);
  font-weight: 500;

  > a {
    text-decoration: none;
    color: var(--text-info);
  }
`;
