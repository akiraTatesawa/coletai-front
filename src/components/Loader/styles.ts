import { CircleNotch } from "phosphor-react";
import styled from "styled-components";

export const SpinningIcon = styled(CircleNotch)`
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  align-self: center;
  justify-self: center;

  font-size: 1.5rem;
  animation: spin 1s linear infinite;
  color: #ffffff;
`;
