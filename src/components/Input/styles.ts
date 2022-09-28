import { EyeSlash, Eye } from "phosphor-react";
import styled, { css } from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  gap: 0.5rem;

  width: 100%;

  position: relative;
`;

export const StyledLabel = styled.label`
  font-size: 1rem;
  color: var(--text-secondary);
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 3rem;

  background-color: var(--surface-input);

  border: none;
  border-radius: 10px;

  padding: 10px 16px;

  color: var(--text-secondary);
  font-size: 1rem;

  &::placeholder {
    color: var(--text-primary);
    opacity: 0.45;
  }
`;

const iconCSS = css`
  font-size: 20px;
  color: var(--text-secondary);
`;

export const Button = styled.button`
  position: absolute;
  right: 1rem;
  top: 55%;

  background-color: var(--surface-input);
  border: none;
  padding: 0;
  margin: 0;
`;

export const SlashEyeIcon = styled(EyeSlash)`
  ${iconCSS}
`;

export const OpenEyeIcon = styled(Eye)`
  ${iconCSS}
`;
