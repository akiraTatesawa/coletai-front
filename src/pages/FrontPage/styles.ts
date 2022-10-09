import styled, { css } from "styled-components";

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

const containerCSS = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  width: 100%;
`;

export const MainContent = styled.div`
  ${containerCSS}

  @media (min-width: 1025px) {
    flex-direction: row;
  }
`;

export const ButtonContainer = styled.div`
  ${containerCSS}

  > h2 {
    display: none;

    font-size: 2rem;
    font-weight: 500;
    color: var(--text-primary);

    @media (min-width: 1025px) {
      display: unset;
    }
  }
`;

export const IntroductionText = styled.div`
  display: none;

  > h2 {
    font-size: 2rem;
    font-weight: 500;
    color: var(--text-primary);
    line-height: 1.1em;
  }

  > p {
    font-size: 1.25rem;
    font-weight: 500;
    color: var(--text-secondary);
    line-height: 1.1em;
  }

  @media (min-width: 1025px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
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

    &:focus {
      outline-color: var(--info-outline);
    }
  }

  @media (min-width: 1025px) {
    align-self: flex-start;
  }
`;
