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

export const TypesContainer = styled.div`
  width: 100%;
  height: max-content;
  padding: 0.5rem 0;

  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  gap: 0.5rem;
`;

export const RecyclingType = styled.button<{ isSelected: boolean }>`
  padding: 0.65rem;
  width: calc(50% - 0.25rem);

  background-color: ${(props) =>
    props.isSelected ? "var(--surface-brand)" : "var(--surface-input)"};
  border: none;
  border-radius: 5px;

  font-size: 1rem;
  font-weight: 500;
  color: ${(props) =>
    props.isSelected ? "var(--brand)" : "var(--text-secondary)"};

  opacity: ${(props) => (props.isSelected ? "1" : "0.5")};
`;

export const DescriptionTextarea = styled.textarea`
  width: 100%;
  height: 8rem;

  resize: none;

  background-color: var(--surface-input);

  border: none;
  border-radius: 6px;

  padding: 0.85rem;

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
