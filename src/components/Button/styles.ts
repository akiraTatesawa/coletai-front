import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  height: 3rem;

  background-color: var(--brand);
  transition: background-color 500ms ease-in-out;

  border: none;
  border-radius: 0.625rem;

  font-size: 1.125rem;
  font-weight: 500;
  color: var(--text-on-brand);

  &:hover {
    background-color: var(--brand-hover);
    transition: background-color 300ms ease-in-out;
  }
`;
