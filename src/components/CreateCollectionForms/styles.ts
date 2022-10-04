import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";
import styled from "styled-components";

import { Button } from "../Button/styles";

export const FormsContainer = styled.div`
  width: 100%;

  background-color: #fff;

  border-radius: 0.5rem;

  padding: 1rem;

  margin-bottom: 0.625rem;

  position: relative;

  *:focus {
    outline-color: var(--brand-stroke);
    outline-offset: 2px;
  }
`;

export const FormsTitle = styled.h3`
  text-align: center;
  font-size: 1.25rem;

  color: var(--text-primary);
  font-weight: 500;

  margin-bottom: 1rem;
`;

export const CloseButton = styled(Popover.Button)`
  position: absolute;
  font-size: 1rem;

  top: 1rem;
  right: 1rem;

  border: none;
  background-color: unset;

  display: flex;
  align-items: center;
  justify-content: center;

  :focus {
    outline-color: var(--secondary-text);
    outline-offset: 1px;
  }
`;

export const XIcon = styled(X)`
  color: var(--text-secondary);
`;

export const Forms = styled.form`
  display: flex;
  flex-direction: column;

  gap: 0.875rem;
`;

export const DescriptionTextarea = styled.textarea`
  width: 100%;
  height: 8rem;

  resize: none;

  background-color: var(--surface-primary);

  border: none;
  border-radius: 6px;

  padding: 0.5rem;

  color: var(--text-primary);
  font-size: 1rem;

  &::placeholder {
    color: var(--text-primary);
    opacity: 0.45;
    font-size: 1rem;
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;

export const SubmitCollectionButton = styled(Button)`
  font-size: 1rem;
  min-height: 1rem;

  border-radius: 6px;
`;
