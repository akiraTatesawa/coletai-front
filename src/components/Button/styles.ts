import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  max-width: 700px;
  min-height: 3rem;

  padding: 16px 14px;

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

  &:focus {
    outline-color: var(--brand-outline);
    outline-offset: 2px;
  }
`;
