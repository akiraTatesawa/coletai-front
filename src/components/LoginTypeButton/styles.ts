import styled from "styled-components";

export const Button = styled.button<{ isSelected: boolean }>`
  width: 6.25rem;
  height: 6.25rem;

  border: ${(props) => (props.isSelected ? "1px solid var(--brand)" : "none")};
  border-radius: 10px;

  background-color: var(--surface-brand);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  flex-shrink: 1;

  font-size: 14px;
  color: var(--text-primary);

  @media (min-width: 600px) {
    width: 8.25rem;
    height: 8.25rem;

    font-size: 1rem;
  }
`;
