import { Recycle } from "phosphor-react";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
`;

export const Icon = styled(Recycle)`
  color: var(--brand);
  font-size: 2rem;
`;

export const Name = styled.div`
  font-size: 2rem;
  color: var(--text-primary);
  font-weight: 500;
`;
