import styled from "styled-components";

export const Button = styled.button`
  width: 6.25rem;
  height: 6.25rem;

  border: none;
  border-radius: 10px;

  background-color: var(--surface-brand);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  flex-shrink: 1;

  font-size: 14px;
  color: var(--text-primary);
`;
