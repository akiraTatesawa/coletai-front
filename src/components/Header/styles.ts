import { Recycle } from "phosphor-react";
import styled from "styled-components";

export const Container = styled.header`
  width: 100%;

  display: flex;
  align-items: center;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;

  gap: 0.625rem;

  @media (min-width: 1025px) {
    align-self: flex-start;
  }
`;

export const Icon = styled(Recycle)`
  color: var(--brand);
  font-size: 2rem;

  @media (min-width: 600px) {
    font-size: 3rem;
  }
`;

export const Name = styled.h1`
  font-size: 2rem;
  color: var(--text-primary);
  font-weight: 500;

  @media (min-width: 600px) {
    font-size: 3rem;
  }
`;
