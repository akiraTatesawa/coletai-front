import { Recycle } from "phosphor-react";
import styled from "styled-components";

export const Container = styled.div`
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

export const Name = styled.div`
  font-size: 2rem;
  color: var(--text-primary);
  font-weight: 500;

  @media (min-width: 600px) {
    font-size: 3rem;
  }
`;
